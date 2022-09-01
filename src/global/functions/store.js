import { need, save, want } from "../../consts/indexes";
import { compareFirstTargetFinalDates, compareTwoDates } from "./time";

export const total = (list) => {
  let total = 0;
  list.map((item) => {
    total += item.price;
  });
  return total;
};

export const totalSpendingsFunction = (list) => {
  let total = 0;
  list.map((item) => {
    total += item.price * item.numberTimesPaid;
  });
  return total;
};

export const renderDatePlannedPayment = (item) => {
  let date = item.date;
  let finalStringSingleDate =
    date.getFullYear() + " - " + (date.getMonth() + 1) + " - " + date.getDate();

  return finalStringSingleDate;
};

export const images = {
  plannedPayment: {
    insurance: require("../../assets/images/insurance.jpg"),
  },
};

export const renderMessageTimeRemaining = () => {
  let categoryPlannedPayment = "";
  if (yearsRemaining > 0 && newDaysRemaining > 0)
    categoryPlannedPayment = "Remaining";
  else if (yearsRemaining < 0 && newDaysRemaining < 0)
    categoryPlannedPayment = "Passed";

  let finalString =
    yearsRemaining != 0
      ? `${yearsRemaining} years ${newDaysRemaining.toFixed(0)} days`
      : `${newDaysRemaining.toFixed(0)} days`;

  finalString += " " + categoryPlannedPayment;

  return { finalString, categoryPlannedPayment };
};

export const calculateSpendingsWants = (list) => {
  let spendingObject = list[want];
  let totalSpendings = 0;
  spendingObject.spendingElements.map((item) => {
    totalSpendings += item.price;
  });
  return totalSpendings;
};

export const calculateSpendingsNeeds = (list) => {
  let spendingObject = list[need];
  let totalSpendings = 0;
  spendingObject.spendingElements.map((item) => {
    totalSpendings += item.price;
  });
  return totalSpendings;
};

export const calculateSpendingsSaves = (list) => {
  let spendingObject = list[save];
  let totalSpendings = 0;
  spendingObject.spendingElements.map((item) => {
    totalSpendings += item.price;
  });
  return totalSpendings;
};

export const calculateAllSpendings = (list) => {
  return (
    calculateSpendingsNeeds(list) +
    calculateSpendingsSaves(list) +
    calculateSpendingsWants(list)
  );
};

export const calculateAllIncomes = (list) => {
  let total = 0;
  list.map((item) => {
    item.incomeElements.map((income) => {
      total += income.price;
    });
  });
  return total;
};

export const calculateAllIncomesCategories = (list) => {
  let total = 0;
  list.map((item) => {
    item.incomeElements.map((income) => {
      total += income.price;
    });
  });
  return total;
};

export const calculateAllSpendingsCategories = (list) => {
  let total = 0;
  list.map((item) => {
    item.spendingElements.map((spending) => {
      total += spending.price;
    });
  });
  return total;
};

export const calculateSpendingsAndIncomes = (list) => {
  const spendings = calculateAllSpendingsCategories(list);
  const incomes = calculateAllIncomesCategories(list);
  return { spendings, incomes };
};

export const calculateBudgetSpendingsAndIncomes = (list) => {
  let totalIncomes = calculateAllIncomesCategories(list);
  let totalSpendings = calculateAllSpendingsCategories(list);
  let currentBudget = totalIncomes - totalSpendings;
  return { currentBudget, totalIncomes, totalSpendings };
};

export const calculateFinalPriceTransaction = (item) => {
  if (item.transaction == "Income") {
    return item?.price;
  } else {
    return item?.price * item.numberTimesPaid;
  }
};

export const returnNewFormDisplayPrice = (price) => {
  let priceString = price.toString();
  // let priceString = Array.from(price.toString()).reverse().join("");
  // var parts = priceString.match(/.{1,3}/g);
  let compteur = 0;
  let blocks = [];
  for (let i = priceString.length - 1; i >= 0; i--) {
    compteur++;
    if (compteur == 3 || i == 0) {
      blocks.unshift(priceString.slice(i, i + compteur));
      compteur = 0;
    }
  }

  var new_value = blocks.join(" ");
  return new_value;
};

export const doComparaisonAllTime = (spending) => {
  return spending.numberTimesPaid != 0;
};

export const doComparaisonSingleDaySpending = (
  compareTwoDates,
  spending,
  single
) => {
  const { date } = spending;
  const comparaisonDates = compareTwoDates(new Date(date), single);

  return comparaisonDates && spending.numberTimesPaid != 0;
};

export const doComparaisonSingleDayIncome = (
  compareTwoDates,
  income,
  single
) => {
  const { date } = income;
  const comparaisonDates = compareTwoDates(new Date(date), single);

  return comparaisonDates;
};

export const doComparaisonInterval = (
  compareFirstTargetFinalDates,
  spending,
  start,
  end
) => {
  const { date } = spending;
  const comparaisonDates = compareFirstTargetFinalDates(
    start,
    new Date(date),
    end
  );

  return comparaisonDates && spending.numberTimesPaid != 0;
};

export const doComparaisonIntervalIncome = (
  compareFirstTargetFinalDates,
  income,
  start,
  end
) => {
  const { date } = income;
  const comparaisonDates = compareFirstTargetFinalDates(
    start,
    new Date(date),
    end
  );

  return comparaisonDates;
};

export const returnFilteredListInterval = (start, end, list, title) => {
  let finalList = [];
  let totalSpendings = 0;
  let totalIncomes = 0;
  list = list.map((item) => {
    const spendings = item.spendingElements.filter((spending) => {
      if (title == "All" || item.title == title) {
        return doComparaisonInterval(
          compareFirstTargetFinalDates,
          spending,
          start,
          end
        );
      }
    });

    totalSpendings += totalSpendingsFunction(spendings);

    const incomes = item.incomeElements.filter((income) => {
      // if (title == "All" || item.title == title) {
      return doComparaisonIntervalIncome(
        compareFirstTargetFinalDates,
        income,
        start,
        end
      );
      // }
    });

    totalIncomes += total(incomes);

    finalList.push({ ...item, spendings, incomes });
  });
  return { finalList, totalIncomes, totalSpendings };
};
export const returnFilteredListAllTime = (list, title) => {
  let finalList = [];
  let totalSpendings = 0;
  let totalIncomes = 0;
  list.map((item) => {
    const spendings = item.spendingElements.filter((spending) => {
      if (title == "All" || item.title == title) {
        return doComparaisonAllTime(spending);
      }
    });
    totalSpendings += totalSpendingsFunction(spendings);
    const incomes = item.incomeElements.filter((income) => {
      if (title == "All" || item.title == title) {
        return true;
      }
    });

    totalIncomes += total(incomes);
    finalList.push({ ...item, spendings, incomes });
  });
  return { finalList, totalIncomes, totalSpendings };
};

export const returnFilteredListSingleDay = (day, list, title) => {
  let finalList = [];
  let totalIncomes = 0;
  let totalSpendings = 0;
  list = list.map((item) => {
    const spendings = item.spendingElements.filter((spending) => {
      if (title == "All" || item.title == title) {
        return doComparaisonSingleDaySpending(compareTwoDates, spending, day);
      }
    });

    totalSpendings += totalSpendingsFunction(spendings);

    const incomes = item.incomeElements.filter((income) => {
      if (title == "All" || item.title == title) {
        return doComparaisonSingleDayIncome(compareTwoDates, income, day);
      }
    });

    totalIncomes += total(incomes);
    finalList.push({ ...item, spendings, incomes });
  });
  return { finalList, totalIncomes, totalSpendings };
};

export const filterResultsDependingOnCategoryAndDate = (
  list,
  timeOptionSelected,
  title,
  singleDate,
  firstDate,
  finalDate
) => {
  if (timeOptionSelected == 2) {
    return returnFilteredListInterval(firstDate, finalDate, list, title);
  } else if (timeOptionSelected == 1) {
    return returnFilteredListAllTime(list, title);
  } else {
    return returnFilteredListSingleDay(singleDate, list, title);
  }
};

export const returnFinalLength = (list) => {
  let total = 0;
  list.map((item) => {
    total += item.incomes.length;
    total += item.spendings.length;
  });

  return total;
};

export const returnFinalLengthSpecificCategory = (item) => {
  return item.incomes.length + item.spendings.length;
};

export const concatenateIncomesAndSpendings = (item) => {
  return item.incomes.concat(item.spendings);
};

export const returnFinalListSpecificCategory = (list, title) => {
  let finalList = [];
  list.map((item) => {
    if (item.title == title) {
      item.spendings.map((spending) => finalList.push(spending));
      item.incomes.map((income) => finalList.push(income));
    }
  });
  return finalList;
};

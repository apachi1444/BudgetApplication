import { need, save, want } from "../../consts/indexes";
import { compareTwoDates } from "./time";

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

export const returnListAllIncomes = () => {
  let finalArrayIncomes = [];
  list.map((item) => {
    item.incomeElements.map((income) => {
      total += income.price;
    });
  });
  return finalArrayIncomes;
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
      total += spending.price * spending.numberTimesPaid;
    });
  });
  return total;
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

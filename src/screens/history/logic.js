import COLORS from "../../consts/color";
import { total } from "../../global/functions/store";
import {
  compareFirstTargetFinalDates,
  compareTwoDates,
} from "../../global/functions/time";

export const calculateBudgetAllTime = (list) => {
  let finalListSpendings = [];
  let finalListIncomes = [];
  list.map((item) => {
    item.spendingElements.map((spending) => {
      finalListSpendings.push(spending);
    });
    item.incomeElements.map((income) => {
      finalListIncomes.push(income);
    });
  });
  return { finalListSpendings, finalListIncomes };
};

export const calculateBudgetInterval = (start, end, list) => {
  let finalFilteredListSpendings = [];
  let finalFilteredListIncomes = [];
  list.map((item) => {
    item.spendingElements.map((spending) => {
      const { date } = spending;
      const comparaisonDates = compareFirstTargetFinalDates(start, date, end);
      if (comparaisonDates) {
        finalFilteredListSpendings.push(spending);
      }
    });
    item.incomeElements.map((income) => {
      const { date } = income;
      const comparaisonDates = compareFirstTargetFinalDates(start, date, end);
      if (comparaisonDates) {
        finalFilteredListIncomes.push(income);
      }
    });
  });
  return { finalFilteredListIncomes, finalFilteredListSpendings };
};

export const calculateBudgetSingleDay = (day, list) => {
  let finalFilteredListSpendings = [];
  let finalFilteredListIncomes = [];
  list.map((item) => {
    item.spendingElements.map((spending) => {
      const { date } = spending;
      const comparaisonBothDates = compareTwoDates(date, day);
      if (comparaisonBothDates) {
        finalFilteredListSpendings.push(spending);
      }
    });
    item.incomeElements.map((income) => {
      const { date } = income;
      const comparaisonBothDates = compareTwoDates(date, day);
      if (comparaisonBothDates) {
        finalFilteredListIncomes.push(income);
      }
    });
  });
  return { finalFilteredListIncomes, finalFilteredListSpendings };
};

export const calculateBudgetAndIncomesAndSpendings = (
  listIncomes,
  listSpendings
) => {
  const totalSpendings = total(listSpendings);
  const totalIncomes = total(listIncomes);
  const currentBudget = totalIncomes - totalSpendings;
  return { currentBudget, totalIncomes, totalSpendings };
};

export const concatenateIncomesAndSpendingsOneCategory = (item) => {
  let finalArrayContainingSpendingsAndIncomes = [];
  item.incomeElements.map((incomeElement) => {
    finalArrayContainingSpendingsAndIncomes.push({
      ...incomeElement,
      color: item.color,
    });
  });
  item.spendingElements.map((spendingElement) => {
    finalArrayContainingSpendingsAndIncomes.push({
      ...spendingElement,
      color: item.color,
    });
  });
  return finalArrayContainingSpendingsAndIncomes;
};

export const concatenateIncomesAndSpendings = (title, list) => {
  let finalArrayContainingSpendingsAndIncomes = [];
  list.map((item) => {
    if (item.title == title || title == "All") {
      item.incomeElements.map((incomeElement) => {
        finalArrayContainingSpendingsAndIncomes.push({
          ...incomeElement,
          color: item.color,
        });
      });
      item.spendingElements.map((spendingElement) => {
        finalArrayContainingSpendingsAndIncomes.push({
          ...spendingElement,
          color: item.color,
        });
      });
    }
  });
  return finalArrayContainingSpendingsAndIncomes;
};

export const renderInformationsAboutBudgetIncomesAndSpendings = (
  list,
  timeOptionSelected,
  singleDate,
  firstDate,
  finalDate
) => {
  if (timeOptionSelected == 2) {
    const { finalFilteredListIncomes, finalFilteredListSpendings } =
      calculateBudgetInterval(firstDate, finalDate, list);
    return {
      finalListIncomes: finalFilteredListIncomes,
      finalListSpendings: finalFilteredListSpendings,
    };
  } else if (timeOptionSelected == 1) {
    const { finalListIncomes, finalListSpendings } =
      calculateBudgetAllTime(list);
    return {
      finalListIncomes,
      finalListSpendings,
    };
  } else {
    const { finalFilteredListIncomes, finalFilteredListSpendings } =
      calculateBudgetSingleDay(singleDate, list);
    return {
      finalListIncomes: finalFilteredListIncomes,
      finalListSpendings: finalFilteredListSpendings,
    };
  }
};

export const renderColorCircleBudget = (name, price) => {
  switch (name) {
    case "Incomes":
      return COLORS.GREEN;
    case "Budget":
      return COLORS.PRIMARY;

    case "Spendings":
      return COLORS.RED;

    default:
      break;
  }
};

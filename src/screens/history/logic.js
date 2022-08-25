import COLORS from "../../consts/color";
import { calculateSpendingsAndIncomes } from "../../global/functions/store";

export const calculateBudgetAndIncomesAndSpendings = (list) => {
  console.log("this is the list given", list);
  const { spendings, incomes } = calculateSpendingsAndIncomes(list);
  const currentBudget = spendings - incomes;
  return { currentBudget, incomes, spendings };
};

export const filterListDependingOnCategory = (category, list) => {
  let finalFilteredListIncomesAndSpendings = [];
  list.map((item) => {
    if (item.category === category) {
      finalFilteredListIncomesAndSpendings.push(item);
    }
  });
  return finalFilteredListIncomesAndSpendings;
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

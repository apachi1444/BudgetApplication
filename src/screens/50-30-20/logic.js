import { total } from "../../global/functions/store";
import { compareTwoDates } from "../../global/functions/time";

export const concatenateIncomesAndSpendingsOneTypeTransactionAndTotalSpendingAndTotalIncomes =
  (item, day) => {
    let finalArrayContainingSpendingsAndIncomes = [];

    let totalIncomes = 0;
    let totalSpendings = 0;
    item.incomeElements.map((incomeElement) => {
      const { date } = incomeElement;
      const comparaisonBothDates = compareTwoDates(date, day);

      if (comparaisonBothDates) {
        totalIncomes += incomeElement.price;
        finalArrayContainingSpendingsAndIncomes.push({
          id: finalArrayContainingSpendingsAndIncomes.length + 1,
          ...incomeElement,
        });
      }
    });
    item.spendingElements.map((spendingElement) => {
      const { date } = spendingElement;
      const comparaisonBothDates = compareTwoDates(date, day);
      if (comparaisonBothDates) {
        totalSpendings += spendingElement.price;
        finalArrayContainingSpendingsAndIncomes.push({
          id: finalArrayContainingSpendingsAndIncomes.length + 1,
          ...spendingElement,
        });
      }
    });
    return {
      finalArrayContainingSpendingsAndIncomes,
      totalSpendings,
      totalIncomes,
    };
  };

export const renderCurrentBudget = (totalSpendings, totalIncomes) => {
  return totalIncomes - totalSpendings;
};
import COLORS from "../../consts/color";
import { needs, saves, wants } from "../../consts/percentages";

export const returnTotalSavesWantsNeeds = (data) => {
  let totalNeeds = 0;
  let totalSaves = 0;

  let totalWants = 0;
  data.map((item) => {
    if (item.title === "Saves") {
      totalSaves = total(item.spendingElements);
    } else if (item.type === "Needs") {
      totalNeeds = total(item.spendingElements);
    } else {
      totalWants = total(item.spendingElements);
    }
  });

  return { totalWants, totalNeeds, totalSaves };
};

export const savesSpedings = (data) => {
  return total(data[2].spendingElements);
};

export const needsSpendings = (data) => {
  return total(data[1].spendingElements);
};

export const wantsSpendings = (data) => {
  return total(data[0].spendingElements);
};

export const returnOptimalIncomes = (totalIncomes) => {
  const totalOptimalSavesIncomes = (totalIncomes * 0.2).toFixed(0);
  const totalOptimamWantsIncomes = (totalIncomes * 0.3).toFixed(0);
  const totalOptimalNeedsIncomes = (totalIncomes * 0.5).toFixed(0);
  return {
    totalOptimamWantsIncomes,
    totalOptimalNeedsIncomes,
    totalOptimalSavesIncomes,
  };
};

export const renderAppropriateSpendings = (type, data) => {
  if (type == "Wants") return wantsSpendings(data);
  else if (type == "Needs") return needsSpendings(data);
  else return savesSpedings(data);
};

export const renderAppropriateOptimalIncomes = (type, totalIncomes) => {
  if (type == "Wants") return (totalIncomes * 0.3).toFixed(0);
  else if (type == "Needs") return (totalIncomes * 0.5).toFixed(0);
  else return (totalIncomes * 0.2).toFixed(0);
};

export const returnOverpassedOrRemaining = (difference) => {
  if (difference < 0) {
    return "Overpassed";
  }
  return "Remaining";
};
export const returnColorAppropriateBorder = (difference) => {
  if (difference < 0) {
    return COLORS.RED;
  }
  return COLORS.GREEN;
};

export const returnPercentageWantAndNeedAndSaveAndGuideExpensesAndGuideExpensesSummary =
  (totalIncomes, data, totalWants, totalSaves, totalNeeds) => {
    const {
      totalOptimamWantsIncomes,
      totalOptimalNeedsIncomes,
      totalOptimalSavesIncomes,
    } = returnOptimalIncomes(totalIncomes);

    let percentageWant = (
      (totalWants / totalOptimamWantsIncomes) *
      100
    ).toFixed(0);

    let percentageNeed = (
      (totalNeeds / totalOptimalNeedsIncomes) *
      100
    ).toFixed(0);
    let percentageSave = (
      (totalSaves / totalOptimalSavesIncomes) *
      100
    ).toFixed(0);

    let finalGuideDataExpenses = [
      {
        y: totalWants,
        color: COLORS.WANTS,
        label: `${percentageWant}%`,
      },
      {
        y: totalSaves,
        color: COLORS.SAVES,
        label: `${percentageSave}%`,
      },
      {
        color: COLORS.NEEDS,
        y: totalNeeds,
        label: `${percentageNeed}%`,
      },
    ];

    let finalGuideDataExpensesSummary = [
      {
        id: 1,
        name: "Wants",
        y: totalWants,
        // label: `${percentageWant}%`,
        color: COLORS.WANTS,
        normal: wants,
        difference: `${wants - percentageWant}`,
        actual: percentageWant,
        totalOptimal: totalOptimamWantsIncomes,
      },
      {
        id: 2,
        name: "Saves",
        y: totalSaves,
        // label: `${percentageSave}%`,
        actual: percentageSave,
        color: COLORS.SAVES,
        normal: saves,
        difference: `${saves - percentageSave}`,
        totalOptimal: totalOptimalSavesIncomes,
      },
      {
        totalOptimal: totalOptimalNeedsIncomes,
        id: 3,
        name: "Needs",
        actual: percentageNeed,
        // label: `${percentageNeed}%`,
        y: totalNeeds,
        color: COLORS.NEEDS,
        normal: needs,
        difference: `${needs - percentageNeed}`,
      },
    ];

    return {
      percentageNeed,
      percentageSave,
      percentageWant,
      finalGuideDataExpenses,
      finalGuideDataExpensesSummary,
    };
  };

import {
  calculateFinalPriceTransaction,
  total,
} from "../../global/functions/store";
import { compareTwoDates } from "../../global/functions/time";

export const concatenateIncomesAndSpendingsOneTypeTransactionAndTotalSpendingAndTotalIncomes =
  (item, day) => {
    let finalArrayContainingSpendings = [];

    let totalSpendings = 0;

    if (item.spendingElements.length > 0) {
      item.spendingElements.map((spendingElement) => {
        const { date } = spendingElement;
        console.log(day, "lksdjfklj");
        const comparaisonBothDates = compareTwoDates(day);
        if (comparaisonBothDates) {
          totalSpendings += calculateFinalPriceTransaction(spendingElement);
          finalArrayContainingSpendings.push({
            id: finalArrayContainingSpendings.length + 1,
            ...spendingElement,
          });
        }
      });
    }

    return {
      finalArrayContainingSpendings,
      totalSpendings,
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
  const totalOptimalSavesIncomes = (totalIncomes * (saves / 100)).toFixed(0);
  const totalOptimamWantsIncomes = (totalIncomes * (wants / 100)).toFixed(0);
  const totalOptimalNeedsIncomes = (totalIncomes * (needs / 100)).toFixed(0);
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
    ).toFixed(1);

    let percentageNeed = (
      (totalNeeds / totalOptimalNeedsIncomes) *
      100
    ).toFixed(1);
    let percentageSave = (
      (totalSaves / totalOptimalSavesIncomes) *
      100
    ).toFixed(1);

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

export const returnPercentageUsedAndRemaining = (y, totalOptimal) => {
  let percentageUsed = ((y / totalOptimal) * 100).toFixed(1);
  let percentageRemaining = 100 - percentageUsed;
  if (percentageUsed >= 100) {
    percentageRemaining = 0;
  }
  return { percentageRemaining, percentageUsed };
};

export const returnFinalChartData = (
  y,
  totalOptimal,
  percentageUsed,
  percentageRemaining
) => {
  let data = [
    {
      id: 1,
      y: Number(percentageRemaining),
      color: COLORS.MEDUIMGREY,
      label: `${percentageRemaining}%`,
      name: "Remaining",
      total:
        percentageRemaining != 0
          ? Math.abs(Number(totalOptimal - y))
          : Number(0),
    },
    {
      id: 2,
      total: Number(y),
      y: Number(percentageUsed),
      color: COLORS.SECONDARY,
      label: `${percentageUsed}%`,
      name: "Used",
    },
  ];
  return data;
};

export const returnListIncomes = (data, day) => {
  let finalArrayContainingIncomes = [];
  let totalIncomesDaySelected = 0;
  data.map((item) => {
    item.incomeElements.map((incomeElement) => {
      const { date } = incomeElement;
      const comparaisonBothDates = compareTwoDates(new Date(date), day);
      if (comparaisonBothDates) {
        totalIncomesDaySelected += incomeElement.price;
        finalArrayContainingIncomes.push({
          id: finalArrayContainingIncomes.length + 1,
          ...incomeElement,
        });
      }
    });
  });

  return { finalArrayContainingIncomes, totalIncomesDaySelected };
};

export const returnListSpendingsAndTotalSpendings = (item, day) => {
  let finalArrayContainingSpendings = [];
  let totalSpendings = 0;
  item.spendingElements.map((spendingElement) => {
    const { date } = spendingElement;
    const comparaisonBothDates = compareTwoDates(new Date(date), day);
    if (comparaisonBothDates && spendingElement.numberTimesPaid != 0) {
      totalSpendings += spendingElement.numberTimesPaid * spendingElement.price;
      finalArrayContainingSpendings.push({
        id: finalArrayContainingSpendings.length + 1,
        ...spendingElement,
      });
    }
  });

  return { finalArrayContainingSpendings, totalSpendings };
};

export const returnFinalStringDate = (date) => {
  return (
    new Date(date).getFullYear() +
    " - " +
    (new Date(date).getMonth() + 1) +
    " - " +
    new Date(date).getDate()
  );
};

import COLORS from "../../consts/color";
import { warningZoneRemainingDays } from "../../consts/plannedPayments";
import { returnYearMonthDay } from "../../global/functions/time";

export const spendingElementsContainsNonEmptyPeriods = (list) => {
  let total = 0;
  list.map((item) => {
    total += item.period;
  });
  if (total > 0) return true;
  return false;
};

export const returnfilteredNonEmptyCategories = (finalList) => {
  console.log("this is the final list in the functino ", finalList);
  return finalList.filter((item) => {
    console.log("spending Elements ", item.spendingElements);
    return (
      item?.spendingElements?.length != 0 &&
      spendingElementsContainsNonEmptyPeriods(item?.spendingElements) == true
    );
  });
};

export const returnTimeRemaining = (yearsRemaining, newDaysRemaining) => {
  let stringYear = yearsRemaining == 1 ? "year" : "years";
  let finalString = "";
  if (yearsRemaining != 0 && newDaysRemaining == 0) {
    finalString = `${yearsRemaining} ${stringYear}`;
  } else if (yearsRemaining != 0 && newDaysRemaining != 0) {
    finalString = `${yearsRemaining} ${stringYear} ${newDaysRemaining.toFixed(
      0
    )} days`;
  } else {
    finalString = `${newDaysRemaining.toFixed(0)} days`;
  }

  return finalString;
};

export const returnTotalSpendingWithNonNullPeriod = (list, id) => {
  let total = 0;
  list.map((item) => {
    console.log("item id ", item.id);
    console.log("our id ", id);
    if (item.id == id) {
      item.spendingElements.map((spendingElement) => {
        if (spendingElement.period != 0) {
          total +=
            spendingElement.price * (spendingElement.numberTimesPaid + 1);
        }
      });
    }
  });
  return total;
};
export const convertDateToMilliseconds = (period) => {
  return period * 24 * 60 * 60 * 1000;
};

export const renderMilliseconds = () => {};

export const renderDifferenceBetweenDatesMilliseconds = (
  newDateAfterPeriod
) => {
  let differenceBetweenDatesMilliSeconds = new Date() - newDateAfterPeriod;
  if (differenceBetweenDatesMilliSeconds < 0) {
    differenceBetweenDatesMilliSeconds *= -1;
  }
  return differenceBetweenDatesMilliSeconds;
};

export const returnDaysRemainingYearsRemainingAndNewDaysRemaining = (
  differenceBetweenDatesMilliSeconds
) => {
  let daysRemaining =
    differenceBetweenDatesMilliSeconds / (1000 * 60 * 60 * 24);

  let yearsRemaining = Math.ceil(daysRemaining) / 365;
  yearsRemaining = Math.floor(yearsRemaining);
  let newDaysRemaining = daysRemaining;
  if (yearsRemaining >= 1) {
    newDaysRemaining =
      Math.ceil(daysRemaining) - 365 * Math.floor(yearsRemaining);
  }
  return { daysRemaining, yearsRemaining, newDaysRemaining };
};

export const returnColorMessageAppriopriate = (
  date,
  newDaysRemaining,
  yearsRemaining
) => {
  let { year, month, day } = returnYearMonthDay(date);
  let remaining = new Date(year, month, day) - new Date() > 0;

  let color = COLORS.GREEN;
  let message = "Remaining";
  if (!remaining) {
    color = COLORS.RED;
    message = "Passed";
  } else if (
    remaining &&
    newDaysRemaining < warningZoneRemainingDays &&
    yearsRemaining == 0
  ) {
    color = COLORS.ORANGE;
  }
  return { color, message };
};

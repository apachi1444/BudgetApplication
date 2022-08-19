import COLORS from "../../consts/color";
import { total } from "../../global/functions/store";

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

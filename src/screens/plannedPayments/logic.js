export const spendingElementsContainsNonEmptyPeriods = (list) => {
  let total;
  list.map((item) => {
    total += item.period;
  });
  if (total > 0) return true;
  return false;
};

export const returnfilteredNonEmptyCategories = (finalList) => {
  finalList.filter((item) => {
    return (
      item?.spendingElements.length != 0 &&
      spendingElementsContainsNonEmptyPeriods(item.spendingElements) == true
    );
  });
};

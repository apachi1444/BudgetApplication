export const concatenateIncomesAndSpendingsOneTypeTransaction = (item) => {
  let finalArrayContainingSpendingsAndIncomes = [];
  item.incomeElements.map((incomeElement) => {
    finalArrayContainingSpendingsAndIncomes.push({
      id: finalArrayContainingSpendingsAndIncomes.length + 1,
      ...incomeElement,
    });
  });
  item.spendingElements.map((spendingElement) => {
    finalArrayContainingSpendingsAndIncomes.push({
      id: finalArrayContainingSpendingsAndIncomes.length + 1,
      ...spendingElement,
    });
  });
  return finalArrayContainingSpendingsAndIncomes;
};

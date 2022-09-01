export const returnNewDate = (date, numberDays) => {
  let milliseconds = date.getTime() + numberDays * (24 * 60 * 60 * 1000);
  let newDate = new Date(milliseconds);
  return newDate;
};

export const renderFinalDate = (date) => {
  return (
    new Date(date).getFullYear() +
    "-" +
    (new Date(date).getMonth() + 1) +
    "-" +
    new Date(date).getDate()
  );
};

export const compareTwoDates = (date1, date2) => {
  date1 = new Date(date1);
  date2 = new Date(date2);
  return (
    date1.getFullYear() == date2.getFullYear() &&
      date1.getMonth() == date2.getMonth(),
    date1.getDate() == date2.getDate()
  );
};

export const compareFirstTargetFinalDates = (first, target, final) => {
  first = new Date(first.getFullYear(), first.getMonth(), first.getDate());
  final = new Date(final.getFullYear(), final.getMonth(), first.getDate());
  target = new Date(target.getFullYear(), target.getMonth(), target.getDate());

  const comparaison =
    first.getTime() <= target.getTime() && target.getTime() <= final.getTime();

  return comparaison;
};

export const returnYearMonthDay = (date) => {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();
  return { year, month, day };
};

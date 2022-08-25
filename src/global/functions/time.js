export const returnNewDate = (date, numberDays) => {
  let milliseconds = date.getTime() + numberDays * (24 * 60 * 60 * 1000);
  let newDate = new Date(milliseconds);
  return newDate;
};

export const renderFinalDate = (date) => {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
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
  console.log("this is the target date ", typeof target);
  const firstYear = first.getFullYear();
  const targetYear = target.getFullYear();
  const finalYear = final.getFullYear();

  const firstMonth = first.getMonth();
  const targetMonth = target.getMonth();
  const finalMonth = final.getMonth();

  const firstDay = first.getDate();
  const targetDay = target.getDate();
  const finalDay = final.getDate();

  const comparaisonYear = firstYear <= targetYear && targetYear <= finalYear;
  const comparaisonMonth =
    firstMonth <= targetMonth && targetMonth <= finalMonth;
  const comparaisonDay = firstDay <= targetDay && targetDay <= finalDay;

  return comparaisonDay && comparaisonMonth && comparaisonYear;
};

export const returnYearMonthDay = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return { year, month, day };
};

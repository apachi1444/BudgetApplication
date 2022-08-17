export const returnNewDate = (date, numberDays) => {
  let milliseconds = date.getTime() + numberDays * (24 * 60 * 60 * 1000);
  let newDate = new Date(milliseconds);
  return newDate;
};

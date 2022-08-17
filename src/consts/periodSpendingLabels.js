export const periodSpendingLabels = [
  "None",
  "1 year",
  "6 Months",
  "3 Months",
  "1 Month",
  "15 Days",
  "10 Days",
  "1 Day",
  "Other",
];

export const periodList = [
  "Yearly",
  "6 months",
  "3 months",
  "Monthly",
  "Daily",
  "Weekly",
  "None",
  "Other",
];

export const objectCorrespondence = {
  Yearly: 365,
  Monthly: 30,
  Daily: 1,
  Weekly: 7,
  "3 Months": 90,
};

export const renderNumberDaysDependingOnPeriodName = (title) => {
  return objectCorrespondence[title];
};

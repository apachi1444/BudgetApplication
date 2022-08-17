export const periodSpendingLabels = [
  { label: "Yearly", value: "Yearly" },
  { label: "Monthly", value: "Monthly" },
  { label: "3 months", value: "3 months" },
  { label: "Weekly", value: "Weekly" },
  { label: "Daily", value: "Daily" },
  { label: "None", value: "None" },
  { label: "Other", value: "Other" },
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

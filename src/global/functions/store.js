import React, { useState } from "react";
import { categories } from "../../consts/categories";
import { listCategories } from "../../consts/spendingCategories";

export const total = (list) => {
  let total = 0;
  list.map((item) => {
    total += item.price;
  });
  return total;
};

export const renderDatePlannedPayment = (item) => {
  let date = item.date;
  let finalStringSingleDate =
    date.getFullYear() + " - " + (date.getMonth() + 1) + " - " + date.getDate();

  return finalStringSingleDate;
};

export const calculateTimeRemaining = (dateSpending, normalDateSpending) => {
  let finalStringSpendingDate =
    dateSpending.getFullYear() +
    " - " +
    (dateSpending.getMonth() + 1) +
    " - " +
    dateSpending.getDate();

  let finalStringNormalSpendingDate =
    normalDateSpending.getFullYear() +
    " - " +
    (normalDateSpending.getMonth() + 1) +
    " - " +
    normalDateSpending.getDate();
};

export const images = {
  plannedPayment: {
    insurance: require("../../assets/images/insurance.jpg"),
  },
};
export const calculateTotalSpendingsAllCategories = (list) => {
  let totals = {};
  categories.map((category) => {
    totals[category] = 0;
  });
  list.map((item) => {
    let totalSpendings = total(item.elements);
    totals[item.title] = totalSpendings;
  });

  return totals;
};

export const renderMessageTimeRemaining = () => {
  let categoryPlannedPayment = "";
  if (yearsRemaining > 0 && newDaysRemaining > 0)
    categoryPlannedPayment = "Remaining";
  else if (yearsRemaining < 0 && newDaysRemaining < 0)
    categoryPlannedPayment = "Passed";

  let finalString =
    yearsRemaining != 0
      ? `${yearsRemaining} years ${newDaysRemaining.toFixed(0)} days`
      : `${newDaysRemaining.toFixed(0)} days`;

  finalString += " " + categoryPlannedPayment;

  return { finalString, categoryPlannedPayment };
};
import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
import { returnNewDate } from "../../../global/functions/time";
let length = 0;
const initialState = categories.map((item) => {
  length += 1;
  return {
    id: length,
    title: item,
    elements: [],
  };
});

export const plannedSpendingsSlice = createSlice({
  name: "plannedSpendingsSlice",
  initialState: initialState,
  reducers: {
    addPlanned: (state, action) => {
      state.map((item) => {
        let { category } = action.payload;
        if (item.title == category) {
          item.elements.push({
            key: item.elements.length + 1,
            ...action.payload,
          });
        }
      });
    },
    updatePlan: (state, action) => {
      const { id, duration, key, date } = action.payload;
      state.map((item) => {
        if (item.id == id) {
          item.elements.map((elem) => {
            if (elem.key == key) {
              let newDate = returnNewDate(date, duration);
              elem.date = newDate;
            }
          });
        }
      });
    },
    deletePlan: (state, action) => {
      const { id, key } = action.payload;
      console.log("this is the key", key);
      state.map((item) => {
        if (item.id == id) {
          item.elements = item.elements.filter((element) => {
            element.key != key;
          });
        }
      });
    },
  },
});

export default plannedSpendingsSlice.reducer;

export const { addPlanned, updatePlan, deletePlan } =
  plannedSpendingsSlice.actions;

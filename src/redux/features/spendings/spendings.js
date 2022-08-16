import { createSlice, nanoid, AsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../consts/categories";
import { periodList } from "../../../consts/periodSpendingLabels";
import { listCategories } from "../../../consts/spendingCategories";
// const initialState = [
//   {
//     title: "PC GAMER 2022",
//     price: 2000,
//     date: new Date(),
//     type: "want",
//     category: categories[0],
//     period: periodList[0],
//     key: 1,
//   },
//   {
//     title: "PC GAMER 2022",
//     price: 5000,
//     category: categories[1],
//     period: periodList[3],
//     date: new Date(),
//     type: "save",
//     key: 2,
//   },
// ];

const initialState = listCategories.map((item) => {
  console.log(listCategories, "lksdjf");
  return {
    id: item.id,
    title: item.name,
    spendingElements: [],
    incomeElements: [],
  };
});

export const spendingsSlice = createSlice({
  name: "Spendings",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      // const stateToAdd = {
      //   key: state.length + 1,
      //   date: new Date(),
      //   ...action.payload,
      // };
      // state.push(stateToAdd);
      let { type, transaction } = action.payload;
      state.map((item) => {
        let { title } = item;

        if (type == title) {
          let finalList =
            transaction == "Income"
              ? item.incomeElements
              : item.spendingElements;
          finalList.push({
            key: finalList.length + 1,
            ...action.payload,
          });
        }
      });
    },
    delete: (state, action) => {
      state.delete(action.payload);
    },
  },
});

export default spendingsSlice.reducer;

export const { add } = spendingsSlice.actions;

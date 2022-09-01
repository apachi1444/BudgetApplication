import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  visited: false,
};

export const userInformations = createSlice({
  name: "userInformations",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const { email } = action.payload;
      if (email == null) {
        state.name = "Anonymous";
      } else {
        state.name = email;
      }
    },

    renderAppVisisted: (state, action) => {
      state.visited = true;
    },
  },
});

export default userInformations.reducer;

export const { addUser, renderAppVisisted } = userInformations.actions;

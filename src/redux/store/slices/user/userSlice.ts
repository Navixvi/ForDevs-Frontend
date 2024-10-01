import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      const loggedUser = localStorage.getItem("loggedUser");
      const parsedUser = loggedUser ? JSON.parse(loggedUser) : null;
      state.value = parsedUser;
    },
    logoutUser: (state) => {
      localStorage.removeItem("loggedUser");
      state.value = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

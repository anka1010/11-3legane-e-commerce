import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  redusers: {
    login(state, action) {},
    logout(state, action) {},
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface authorizationState {
  isAuth: boolean;
  username: string;
  password: string;
  token: string;
}

const initialState: authorizationState = {
  isAuth: false,
  username: "",
  password: "",
  token: "",
};

export const authorization = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    changeLog: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { changeLog, changeUsername, changePassword, setToken } =
  authorization.actions;

export default authorization.reducer;

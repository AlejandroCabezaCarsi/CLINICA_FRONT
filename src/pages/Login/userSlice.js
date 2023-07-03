import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {
      token: "",
    },
    dataUser: {
      name: "",
      role: "",
      id: "",
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;

      state.credentials = {
        token: payload.token,
      };

      state.dataUser = {
        name: payload.name,
        role: payload.role,
        id: payload.id,
      };

      // return{
      //     ...state,
      //     ...action.payload
      // }
    },

    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: "",
        },
        dataUser: {
          name: "",
          role: "",
          id: "",
        },
      };
    },
  },
});

export const userData = (state) => state.user;
export default userSlice.reducer;
export const { login, logout } = userSlice.actions;

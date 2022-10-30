import { configureStore } from "@reduxjs/toolkit";
//reducers
import users from "./slices/users";
import authSlice from "./slices/login/authSlice";

export default configureStore({
  reducer: {
    users,
    login: authSlice,
  },
});

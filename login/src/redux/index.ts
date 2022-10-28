import { configureStore } from "@reduxjs/toolkit";
//reducers
import users from "./slices/users";

export default configureStore({
  reducer: {
    users,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

let page = 1;

export const nextPage = () => {
  page++;
};

export const previousPage = () => {
  page--;
};

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?page=" + page + "&per_page=6")
    .then((res) => {
      dispatch(setUserList(res.data.data));
    })
    .catch((error) => console.log(error));
};

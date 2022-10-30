import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export let log = false;

//Con esta función se podría hacer el registro lo que falta es la vista

export const signUp = createAsyncThunk("signUpUser", async (body) => {
  const res = await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
});

export const signIn = createAsyncThunk("signInUser", async (body) => {
  const res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
});

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken: (state: any, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state: any, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state: any, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    //********Register***********//
    [signUp.pending as any]: (state, action) => {
      state.loading = true;
    },
    [signUp.fulfilled as any]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUp.rejected as any]: (state, action) => {
      state.loading = true;
    },

    //********Login***********//

    [signIn.pending as any]: (state, action) => {
      state.loading = true;
    },
    [signIn.fulfilled as any]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
        log = false;
        alert(state.error);
      } else {
        state.msg = msg;
        state.user = user;
        state.token = token;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        log = true;
      }
    },
    [signIn.rejected as any]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;

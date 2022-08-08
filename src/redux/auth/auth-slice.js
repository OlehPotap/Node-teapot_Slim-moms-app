import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current, dailyUserInfo } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
    userInfo:{},
    forbidenCategories:[],
    dailyCaloriesRate:0,
  },
  token: null,
  isLogin: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      // state.token = payload.token;
      state.loading = false;
      // state.isLogin = true;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.user = { ...initialState.user };
      state.token = null;
      state.isLogin = false;
      state.loading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [current.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [dailyUserInfo.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [dailyUserInfo.fulfilled]: (state, { payload }) => {
      // console.log(payload)
      state.user.userInfo = payload.userInfo;
      state.user.forbidenCategories = payload.forbidenCategories;
      state.user.dailyCaloriesRate = payload.dailyCaloriesRate;
      state.loading = false;
    },
    [dailyUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;

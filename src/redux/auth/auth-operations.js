import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import authAPI from '../../shared/api/authApi';

export const signup = createAsyncThunk(
  'auth/signup', 
  async (userData, thunkApi) => {
    try {
      return await authAPI.signup(userData);
    } catch (error) {
      Notify.failure(error.response?.data?.message);
      return thunkApi.rejectWithValue(error.response?.data?.message);
      
    }
});

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const {data} = await authAPI.login(userData);
      return data
    } catch (error) {
      Notify.failure(error.response?.data?.message);
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    return await authAPI.logout();
  } catch (error) {Notify.failure(error.response?.data?.message);
    return thunkApi.rejectWithValue(error.response?.data?.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().auth.token;
    const user = await authAPI.getCurrent(token);
    return user
  } catch (error) {
    Notify.failure(error.response?.data?.message);
    return thunkApi.rejectWithValue(error.response?.data?.message);
  }
});

export const dailyUserInfo = createAsyncThunk('auth/dailyUserInfo', async (userInfo, thunkApi) => {
  try {
    const currentUserInfo = await authAPI.updateUserInfo(userInfo);
    
    return currentUserInfo
  } catch (error) {
    console.log(`UserInfo`, error.response?.data?.message)
    return thunkApi.rejectWithValue(error.response?.data?.message);
  }
});

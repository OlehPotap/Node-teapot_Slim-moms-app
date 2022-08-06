import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/authApi';

export const signup = createAsyncThunk(
  'auth/signup', 
  async (userData, thunkApi) => {
    try {
      return await authAPI.signup(userData);
    } catch (error) {
      thunkApi.rejectWithValue(error.request.status);
      
    }
});

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      return await authAPI.login(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.request.status);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    return await authAPI.logout();
  } catch (error) {
   return thunkApi.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().auth.token;
    const {user} = await authAPI.getCurrent(token);
    return {
      user,
      token
    }
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

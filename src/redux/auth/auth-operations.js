import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/authApi';

export const signup = createAsyncThunk('auth/signup', async () => {
  try {
  } catch (error) {}
});

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      return await authAPI.login(userData);
    } catch (error) {
      thunkApi.rejectWithValue(error.request.status);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
  } catch (error) {}
});

export const current = createAsyncThunk('auth/current', async () => {
  try {
  } catch (error) {}
});

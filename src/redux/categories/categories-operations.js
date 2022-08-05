import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/categoriesApi';

export const allCategories = createAsyncThunk('categories/getAll', async () => {
    try {
        await authAPI.getAll()
    } catch (error) {
        console.log(error)
    }
  });
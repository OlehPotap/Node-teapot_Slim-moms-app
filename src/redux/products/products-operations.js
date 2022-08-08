import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/productsApi';

export const addProduct = createAsyncThunk('product/addProduct', async body => {
  const addedProduct = await authAPI.add(body);
  return addedProduct;
});

export const getDailyProducts = createAsyncThunk('products/getDaily', async body => {
  const DailyProducts = await authAPI.getAll(body);
  return DailyProducts;
});

export const deleteProduct = createAsyncThunk('products/delete', async body => {
  const DailyProducts = await authAPI.remove(body);
  return DailyProducts;
});


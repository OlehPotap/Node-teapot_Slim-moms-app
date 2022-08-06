import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/productsApi';

export const addProduct = createAsyncThunk('product/addProduct', async body => {
  const addedProduct = await authAPI.add(body);
  return addedProduct;
});

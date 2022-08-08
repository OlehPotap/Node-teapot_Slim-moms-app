import { createSlice } from '@reduxjs/toolkit';
import { getDailyProducts , deleteProduct} from './products-operations';

const initialState = {
  productsList: [],
  isLogin: false,
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getDailyProducts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getDailyProducts.fulfilled]: (state, { payload }) => {
      if (!payload) {
        state.productsList = [];
      } else {
        state.productsList = payload.productList;
      }

      state.loading = false;
      // state.isLogin = true;
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteProduct.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
        state.productsList = payload.productList;
      state.loading = false;
      // state.isLogin = true;
    },
    [getDailyProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default productsSlice.reducer;

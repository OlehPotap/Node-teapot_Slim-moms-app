import { createSlice } from '@reduxjs/toolkit';

import { allCategories, getForbidenCategories } from './categories-operations';

const initialState = {
  categories: [],
  error: null,
  loading: false,
  filter: ''
};

const categoriesReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: {
    [allCategories.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [allCategories.fulfilled]: (state, { payload }) => {
      state.categories = [...payload];
      state.loading = false;
      state.error = null;
    },
    [allCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getForbidenCategories.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getForbidenCategories.fulfilled]: (state, { payload }) => {
      state.categories = [...payload];
      state.loading = false;
      state.error = null;
    },
    [getForbidenCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = categoriesReducer.actions;

export default categoriesReducer.reducer;

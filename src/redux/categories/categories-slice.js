import { createSlice } from '@reduxjs/toolkit';

import { allCategories } from './categories-operations';


const initialState = {
    categories: [],
    error: null,
    loading: false,
  };

  const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    [allCategories.pending]: state => {
        state.loading = true;
        state.error = null
    },
    [allCategories.fulfilled]: (state, {payload}) => {
        console.log(payload)
        state.loading = false;
        state.error = null
    },
    [allCategories.rejected]: (state, {payload}) => {
        console.log(payload)
        state.loading = false;
        state.error = payload;
    },
  })

  export default categoriesSlice.reducer;
import { createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../../shared/api/categoriesApi';

export const allCategories = createAsyncThunk('categories/getAll', async () => {
  try {
    const { data } = await authAPI.getAll();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getForbidenCategories = createAsyncThunk(
  'categories/getForbiden',
  async (values, thunkApi) => {
    try {
      const CategoriesList = await authAPI.getAll().then(({ data }) => {
        return data;
      });
      const filteredArr = await CategoriesList?.filter(el => {
        return el.groupBloodNotAllowed[Number(values.bloodType)];
      });
      const newCategories = filteredArr.map(el =>
        el.categories.find(el => {
          return el;
        })
      );
      const newArr = newCategories.filter(
        (el, id) => newCategories.indexOf(el) === id
      );
      return newArr;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

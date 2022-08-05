import { createReducer } from '@reduxjs/toolkit';
import { getCurrentUserSuccess, logoutSuccess } from '../auth/auth.actions';
import { updateCalculatorSuccess } from '../calculator/calculator.actions';
import {
  addProductSuccess,
  deleteProductSuccess,
  getDayInfoSuccess,
} from '../products/products.actions';
import { getDailyRateSuccess } from './dailyrateActions';

const initialState = {
  id: '',
  dailyRate: '',
  summaries: {
    _id: '',
    date: '',
    kcalLeft: '',
    kcalConsumed: '',
    dailyRate: '',
    percentsOfDailyRate: '',
    userId: '',
  },

  notAllowedProducts: [],
};

const daySummaryInfo = createReducer(initialState, {
  [getDailyRateSuccess]: (_, { payload }) => payload,
  [getCurrentUserSuccess]: (state, { payload }) => ({
    ...state,
    notAllowedProducts: payload.userData.notAllowedProducts,
    user: payload.userData.weight,
  }),
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries:
      typeof payload.daySummary === 'undefined'
        ? payload.newSummary
        : payload.daySummary,
  }),

  [getDayInfoSuccess]: (state, { payload }) => {
    if ('id' in payload) {
      return {
        ...state,
        id: payload.id,
        summaries: payload.daySummary,
      };
    }

    return {
      ...state,
      summaries: payload,
    };
  },

  [deleteProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries: payload.newDaySummary,
  }),

  [updateCalculatorSuccess]: (state, { payload }) => {
    const day = payload.summaries.find(
      summary => summary.date === state.summaries.date
    );

    if (day) {
      return {
        ...state,
        summaries: day,
        notAllowedProducts: payload.notAllowedProducts,
      };
    }
    return {
      ...state,
      notAllowedProducts: payload.notAllowedProducts,
      summaries: {
        ...state.summaries,
        dailyRate: payload.dailyRate,
        kcalLeft: payload.dailyRate,
      },
    };
  },

  [logoutSuccess]: () => initialState,
});

export default daySummaryInfo;

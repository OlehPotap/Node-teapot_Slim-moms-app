import { createAction } from '@reduxjs/toolkit';

const getDailyRateRequest = createAction('dailyRate/getDailyRateRequest');
const getDailyRateSuccess = createAction('dailyRate/getDailyRateSuccess');
const getDailyRateError = createAction('dailyRate/getDailyRateError');

export { getDailyRateRequest, getDailyRateSuccess, getDailyRateError };

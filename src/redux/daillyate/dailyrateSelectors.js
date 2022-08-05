const getDaySummary = state => state.rateInfo?.daySummary;
const kcalSelector = state => state.rateInfo?.summaries?.dailyRate;

const kcalLeftSelector = state => state.rateInfo?.summaries?.kcalLeft;
const dateSelector = state => state.rateInfo?.summaries?.date;

const kcalConsumedSelector = state => state.rateInfo?.summaries?.kcalConsumed;
const percentsOfDailyRateSelector = state =>
  state.rateInfo?.summaries?.percentsOfDailyRate;

const notAllowedProds = state => state.rateInfo?.notAllowedProducts;

export {
  getDaySummary,
  kcalSelector,
  percentsOfDailyRateSelector,
  kcalConsumedSelector,
  kcalLeftSelector,
  dateSelector,
  notAllowedProds,
};

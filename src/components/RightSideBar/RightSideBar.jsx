import React from 'react';
import { format } from 'date-fns';
import s from './RightSideBar.module.scss';

const RightSideBar = () => {
  // взять данные с стора...
  const data = format(new Date(), 'MM/dd/yyyy');
  const consumedCalories = 0;
  const dailyRateCalories = 0;
  const leftCalories = dailyRateCalories - consumedCalories;
  const percentCalories = isNaN(
    parseInt((consumedCalories / dailyRateCalories) * 100)
  )
    ? 0
    : parseInt((consumedCalories / dailyRateCalories) * 100);
  const forbidenCategories = '';

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.summary}>
          <h3 className={s.header}>Summary for {data}</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.info}>Left</span>
              <span className={s.info}>{leftCalories} kcal</span>
            </li>
            <li className={s.item}>
              <span className={s.info}>Consumed</span>
              <span className={s.info}>{consumedCalories} kcal</span>
            </li>
            <li className={s.item}>
              <span className={s.info}>Daily rate</span>
              <span className={s.info}>{dailyRateCalories} kcal</span>
            </li>
            <li className={s.item}>
              <span className={s.info}>n% of normal</span>
              <span className={s.info}>{percentCalories} kcal</span>
            </li>
          </ul>
        </div>
        <div className={s.categories}>
          <h3 className={s.header}>Food not recommended</h3>
          <p className={s.info}>
            {forbidenCategories
              ? forbidenCategories
              : 'Your diet will be displayed here'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

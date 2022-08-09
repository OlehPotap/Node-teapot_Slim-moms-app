import React from 'react';
import { format } from 'date-fns';
import s from './RightSideBar.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { getCaloriesReceived } from '../../redux/products/products-selectors';
import { useLocation } from 'react-router-dom';


const RightSideBar = () => {
  const location = useLocation();
  const locationDate = location.search?.split('=')[1];
  const formatedDate = `${locationDate?.slice(4,6)}/${locationDate?.slice(6,8)}/${locationDate?.slice(0,4)}`
  const caloriesReceived = useSelector(getCaloriesReceived)
  const user = useSelector(getUser)
  const data = locationDate ? formatedDate : format(new Date(), 'MM/dd/yyyy');
  const dailyRateCalories = user.dailyCaloriesRate;
  const leftCalories = dailyRateCalories - caloriesReceived;

  // useEffect(()=>{
  //   // setLeftCalories(dailyRateCalories - caloriesReceived) 
  // },[location])

  const percentCalories = isNaN(
    parseInt((caloriesReceived / dailyRateCalories) * 100)
  )
    ? 0
    : parseInt((caloriesReceived / dailyRateCalories) * 100);
  const forbidenCategories = user.forbidenCategories;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.summary}>
          <h3 className={s.header}>Summary for {data}</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.info}>Left</span>
              <span className={s.info}>{leftCalories || 0} kcal</span>
            </li>
            <li className={s.item}>
              <span className={s.info}>Consumed</span>
              <span className={s.info}>{caloriesReceived} kcal</span>
            </li>
            <li className={s.item}>
              <span className={s.info}>Daily rate</span>
              <span className={s.info}>{dailyRateCalories || 0} kcal</span>
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
              ? forbidenCategories.join(" ")
              : 'Your diet will be displayed here'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

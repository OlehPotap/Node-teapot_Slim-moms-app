import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDailyProducts } from '../../redux/products/products-operations';

import { geAllDailyProducts } from '../../redux/products/products-selectors';
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';

const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dailyProducts = useSelector(geAllDailyProducts);
  const date = location.search?.split('=')[1];
  useEffect(() => {
    if (date) {
      setTimeout(() => {
        dispatch(getDailyProducts(date));
      }, 0);
    } // eslint-disable-next-line
  }, [location, dispatch]);

  return (
    <div className={s.products}>
      <ul className={s.list}>
        {dailyProducts?.map(el => {
          return (
            <DiaryProductsListItem
              title={el.title.ua}
              weight={el.weight}
              calories={el.calories}
              _id={el._id}
              key={el._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DiaryProductsList;

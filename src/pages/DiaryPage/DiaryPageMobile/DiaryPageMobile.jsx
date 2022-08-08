import { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import { filter } from 'lodash';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DiaryPageMobile.module.scss';

import sprite from '../../../assets/images/symbol-defs.svg';

import {
  getFilter,
  getAllCategories,
} from '../../../redux/categories/categories-selectors';
import { changeData } from '../../../redux/categories/categories-slice';

const DiaryPageMobile = ({ children }) => {
  const dispatch = useDispatch();
  const productName = useSelector(getFilter);
  const productList = useSelector(getAllCategories);

  const checkProduct = () => {
    const normalizeProductName = productName?.toLowerCase();
    const filtered = filter(productList, item =>
      item?.title?.ua?.toLowerCase().includes(normalizeProductName)
    );
    return filtered?.length;
  };

  return (
    <div className={s.cover}>
      <div className={s.fields}>
        <div className={s.fields__cover}>
          <DatePicker
            dateFormat="dd.MM.yyyy"
            maxDate={new Date()}
            name="datapicker"
            selected={new Date()}
            onChange={date => dispatch(changeData(date))}
            className={s.fields__dataPicker}
          />
          <svg width="20" height="20" className={s.fields__icon}>
            <use href={`${sprite}#icon-calendar`}></use>
          </svg>
        </div>
      </div>
      {children}
      <Link to="add-mobile" className={s.fields__btn} type="submit">
        <span className={s.fields__btn_plus}>+</span>
      </Link>
    </div>
  );
};

export default DiaryPageMobile;

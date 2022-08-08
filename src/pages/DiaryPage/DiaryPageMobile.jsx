import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { find, filter } from 'lodash';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DiaryPageMobile.module.scss';

import sprite from '../../assets/images/symbol-defs.svg';

import {
  getFilter,
  getAllCategories,
} from '../../redux/categories/categories-selectors';
import { changeFilter } from '../../redux/categories/categories-slice';

import { addProduct } from '../../redux/products/products-operations';

const DiaryPageMobile = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [gram, setGram] = useState('');
  const dispatch = useDispatch();
  const productName = useSelector(getFilter);
  const productList = useSelector(getAllCategories);

  const getInfoOnChoice = () => {
    const getInf = find(productList, item => item.title.ua === productName);
    return getInf;
  };

  const checkProduct = () => {
    const normalizeProductName = productName?.toLowerCase();
    const filtered = filter(productList, item =>
      item?.title?.ua?.toLowerCase().includes(normalizeProductName)
    );
    return filtered?.length;
  };

  const addProductFromTheForm = async () => {
    const inf = await getInfoOnChoice();
    const body = {
      categories: inf.categories,
      weight: +gram,
      title: inf.title,
      calories: (Number(gram) / 100) * inf.calories,
      groupBloodNotAllowed: inf.groupBloodNotAllowed,
      date: startDate,
    };
    dispatch(addProduct(body));
    dispatch(changeFilter(''));
    setGram('');
    startDate(new Date());
  };

  const checkIsMount =
    !!checkProduct() && checkProduct() < 25 && checkProduct() !== 1;

  return (
    <div className={s.cover}>
      <div className={s.diary}>
        <Formik
          initialValues={{ products: productName, datapicker: startDate, gram }}
          onSubmit={() => addProductFromTheForm()}
        >
          {({ handleChange }) => (
            <Form className={s.diaryFormMob}>
              <div className={s.fields__cover}>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  maxDate={new Date()}
                  name="datapicker"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  className={s.diaryFormMob__dataPicker}
                />
                <svg width="20" height="20" className={s.diaryFormMob__icon}>
                  <use href={`${sprite}#icon-calendar`}></use>
                </svg>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {children}
      <button className={s.diaryFormMob__btn} type="submit">
        <span className={s.diaryFormMob__btn_plus}>+</span>
      </button>
    </div>
  );
};

export default DiaryPageMobile;

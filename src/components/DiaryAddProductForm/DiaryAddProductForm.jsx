import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { find, filter } from 'lodash';
// import Moment from 'moment';
import { format } from "date-fns";
// import { uk } from "date-fns/locale";


import 'react-datepicker/dist/react-datepicker.css';
import s from './DiaryAddProductForm.module.scss';

import sprite from '../../assets/images/symbol-defs.svg';

import {
  getAllCategories,
} from '../../redux/categories/categories-selectors';
import HelperListProducts from '../common/HelperListProducts/HelperListProducts';
import { addProduct } from '../../redux/products/products-operations';

const DiaryAddProductForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [gram, setGram] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const productList = useSelector(getAllCategories);


  useEffect(()=>{
  },[productList])


  const getInfoOnChoice = () => {
    const getInf = find(productList, el => el.title.ua === search);
    return getInf;
  };

  const checkProduct = () => {
    const normalizeProductName = search?.toLowerCase();
    const filtered = filter(productList, item =>
      item?.title?.ua?.toLowerCase().includes(normalizeProductName)
    );
    return filtered?.length;
  };

  const addProductFromTheForm = async () => {
    const inf = await getInfoOnChoice();
    const body = {
      date: format(startDate, "yyyyMMdd"),
    product: {
      weight: +gram,
      title: inf.title,
      calories: (Number(gram) / 100) * inf.calories,
    },
  };
    dispatch(addProduct(body));
    setSearch('')
    setGram('');
    startDate(new Date());
  };

  const checkIsMount =
    !!checkProduct() && search !=='' && checkProduct() !== 1;

  return (
    <div className={s.diary}>
      {checkIsMount && <HelperListProducts search={search} setSearch={(text)=>setSearch(text)}/>}
      <Formik
        initialValues={{ products: search, datapicker: startDate, gram }}
        onSubmit={() => addProductFromTheForm()}
      >
        {({ handleChange }) => (
          <Form className={s.diaryForm}>
            <div className={s.fields__cover}>
              <DatePicker
                dateFormat="dd.MM.yyyy"
                closeOnScroll={true}
                maxDate={new Date()}
                name="datapicker"
                selected={startDate}
                onChange={date => setStartDate(date)}
                className={s.diaryForm__dataPicker}
              />
              <svg width="20" height="20" className={s.diaryForm__icon}>
                <use href={`${sprite}#icon-calendar`}></use>
              </svg>
            </div>

            <div className={s.diaryForm__cover}>
              <label className={s.diaryForm__label}>
                <p className={s.diaryForm__text}>Enter product name</p>
                <Field
                  id="product"
                  name="products"
                  as="input"
                  value={search}
                  onChange={e => {
                    handleChange(e);
                    setSearch(e.target.value);
                  }}
                  className={s.diaryForm__fields}
                ></Field>
              </label>

              <label className={s.diaryForm__label}>
                <p className={`${s.diaryForm__text} ${s.diaryForm__text_last}`}>
                  Gram
                </p>
                <Field
                  className={`${s.diaryForm__fields} ${s.diaryForm__gram}`}
                  as="input"
                  name="gram"
                  type="number"
                  value={gram}
                  onChange={e => {
                    handleChange(e);
                    setGram(e.target.value);
                  }}
                />
              </label>
              <button className={s.diaryForm__btn} type="submit">
                <span className={s.diaryForm__btn_plus}>+</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DiaryAddProductForm;

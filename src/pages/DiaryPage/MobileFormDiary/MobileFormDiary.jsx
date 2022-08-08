import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { find, filter } from 'lodash';
import HelperListProducts from '../../../components/common/HelperListProducts/HelperListProducts';
import s from './MobileFormDiary.module.scss';
import { changeFilter } from '../../../redux/categories/categories-slice';
import {
  getAllCategories,
  getData,
} from '../../../redux/categories/categories-selectors';
import { addProduct } from '../../../redux/products/products-operations';
import { allCategories } from '../../../redux/categories/categories-operations';

const MobileFormDiary = () => {
  const dispatch = useDispatch();
  const [gram, setGram] = useState('');
  const [search, setSearch] = useState('');
  const productList = useSelector(getAllCategories);
  const startDate = useSelector(getData);

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);

  const getInfoOnChoice = () => {
    const getInf = find(productList, item => item.title.ua === search);
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
    !!checkProduct() && search !== '' && checkProduct() !== 1;
  console.log('~ checkIsMount', checkIsMount);

  return (
    <div className={s.diary}>
      {checkIsMount && (
        <HelperListProducts
          search={search}
          setSearch={text => setSearch(text)}
        />
      )}
      <Formik
        initialValues={{ search, gram }}
        onSubmit={() => addProductFromTheForm()}
      >
        {({ handleChange }) => (
          <Form className={s.diaryForm}>
            <div className={s.diaryForm__cover}>
              <label className={s.diaryForm__label}>
                <p className={s.diaryForm__text}>Enter product name</p>
                <Field
                  id="search"
                  name="search"
                  as="input"
                  value={search}
                  onChange={e => {
                    handleChange(e);
                    return setSearch(e.target.value);
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
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MobileFormDiary;

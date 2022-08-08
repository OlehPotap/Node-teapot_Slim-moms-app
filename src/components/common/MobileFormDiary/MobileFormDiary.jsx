import { Formik, Form, Field } from 'formik';

const MobileFormDiary = () => {
  return (
    <Formik
      initialValues={{ products: productName, datapicker: startDate, gram }}
    >
      {({ handleChange }) => (
        <Form className={s.diaryForm}>
          <div className={s.diaryForm__cover}>
            <label className={s.diaryForm__label}>
              <p className={s.diaryForm__text}>Enter product name</p>
              <Field
                id="product"
                name="products"
                as="input"
                value={productName}
                onChange={e => {
                  handleChange(e);
                  return dispatch(changeFilter(e.target.value));
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
  );
};

export default MobileFormDiary;

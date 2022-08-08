import s from './CalculatorCalorieForm.module.scss';
import Loader from '../../components/common/Loader/Loader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { getIsLoading, getIslogin } from '../../redux/auth/auth-selectors';
import * as Yup from 'yup';
import Modal from '../Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getForbidenCategories } from '../../redux/categories/categories-operations';

const CalculatorCalorieForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIslogin);
  const isLoading = useSelector(getIsLoading);
  const [modalOpen, setModalOpen] = useState(false);
  const [calories, setCalories] = useState('');

  const ShowModal = () => {
    setModalOpen(!modalOpen);
  };
  const schema = Yup.object().shape({
    height: Yup.number().required().max(250),
    desiredWeight: Yup.number().required().min(40),
    age: Yup.number().required().max(100).min(16),
    currentWeight: Yup.number().required().min(40),
    bloodType: Yup.string().required(),
  });

  return (
    <div className={s.section}>
      {isLoading && <Loader />}
      <h1 className={s.title}>
        Calculate your daily calorie <br /> intake right now
      </h1>
      <Formik
        initialValues={{
          height: '180',
          desiredWeight: '66',
          age: '22',
          currentWeight: '77',
          bloodType: '',
        }}
        validationSchema={schema}
        onSubmit={async values => {
          const calcCalories =
            10 * values.currentWeight +
            6.25 * values.height -
            5 * values.age -
            161 -
            10 * (values.currentWeight - values.desiredWeight);
          setCalories(calcCalories);
          if (!isLogin) {
            dispatch(getForbidenCategories(values));
            ShowModal();
          } else {
          }
        }}
      >
        <Form className={s.form}>
          <div className={s.fieldsWrapper}>
            <div className={s.fieldWrapper}>
              <label className={s.textLabel} htmlFor="height">
                Height *
              </label>
              <Field
                className={s.input}
                id="height"
                name="height"
                type="number"
                autoComplete="off"
              />
              <ErrorMessage
                name="height"
                render={err => {
                  return <p>{err}</p>;
                }}
              />
            </div>
            <div className={s.fieldWrapper}>
              <label className={s.textLabel} htmlFor="age">
                Age *
              </label>
              <Field
                className={s.input}
                id="age"
                name="age"
                type="number"
                autoComplete="off"
              />
              <ErrorMessage
                name="age"
                render={err => {
                  return <p>{err}</p>;
                }}
              />
            </div>
            <div className={s.fieldWrapper}>
              <label className={s.textLabel} htmlFor="currentWeight">
                Current Weight *
              </label>
              <Field
                className={s.input}
                id="currentWeight"
                name="currentWeight"
                type="number"
                autoComplete="off"
              />
              <ErrorMessage
                name="currentWeight"
                render={err => {
                  return <p>{err}</p>;
                }}
              />
            </div>
            <div className={s.fieldWrapper}>
              <label className={s.textLabel} htmlFor="desiredWeight">
                Desired Weight *
              </label>
              <Field
                className={s.input}
                id="desiredWeight"
                name="desiredWeight"
                type="number"
                autoComplete="off"
              />
              <ErrorMessage
                name="desiredWeight"
                render={err => {
                  return <p>{err}</p>;
                }}
              />
            </div>
            <div className={s.fieldWrapper}>
              <div className={s.textLabel} id="radio-group">
                Blood Type *
              </div>
              <div
                className={s.radioGroup}
                role="group"
                aria-labelledby="radio-group"
              >
                <label className={s.radioLabel}>
                  <Field
                    className={s.radoiButton}
                    type="radio"
                    name="bloodType"
                    value="1"
                  />{' '}
                  <span> 1</span>
                </label>
                <label className={s.radioLabel}>
                  <Field
                    className={s.radoiButton}
                    type="radio"
                    name="bloodType"
                    value="2"
                  />{' '}
                  <span> 2</span>
                </label>
                <label className={s.radioLabel}>
                  <Field
                    className={s.radoiButton}
                    type="radio"
                    name="bloodType"
                    value="3"
                  />{' '}
                  <span> 3</span>
                </label>
                <label className={s.radioLabel}>
                  <Field
                    className={s.radoiButton}
                    type="radio"
                    name="bloodType"
                    value="4"
                  />{' '}
                  <span> 4</span>
                </label>
              </div>
              <ErrorMessage
                name="bloodType"
                render={err => {
                  return <p>{err}</p>;
                }}
              />
            </div>
            <button className={s.submitButton} type="submit">
              Start losing weight
            </button>
          </div>
        </Form>
      </Formik>
      {modalOpen && <Modal handleClose={ShowModal} givenCalories={calories} />}
    </div>
  );
};

export default CalculatorCalorieForm;

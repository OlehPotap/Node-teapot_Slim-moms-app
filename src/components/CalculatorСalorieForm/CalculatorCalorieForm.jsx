import s from './CalculatorCalorieForm.module.scss';
import Loader from '../../components/common/Loader/Loader';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/auth/auth-selectors';

const CalculatorCalorieForm = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  return (
    <div className={s.section}>
      {isLoading && <Loader />}
      <h1>
        Calculate your daily calorie <br /> intake right now
      </h1>
      <Formik
        initialValues={{
          height: '',
          desiredWeight: '',
          age: '',
          currentWeight: '',
          bloodType: '',
        }}
        onSubmit={values => {
          // Тут я так понимаю если пользователь залогинен
          // нужно оправить эти данные на бек
          // и отобразить исходящие данные в компоненте RightSideBar
          // или отобразить модалку, если не залогинен.
          console.log(values);
        }}
      >
        <Form className={s.form}>
          <div className={s.fieldsWrapper}>
            <div className={s.fieldWrapper}>
              <label htmlFor="height">Height *</label>
              <Field
                className={s.input}
                id="height"
                name="height"
                type="number"
                autoComplete="off"
              />
            </div>
            <div className={s.fieldWrapper}>
              <label htmlFor="desiredWeight">Desired Weight *</label>
              <Field
                className={s.input}
                id="desiredWeight"
                name="desiredWeight"
                type="number"
                autoComplete="off"
              />
            </div>
            <div className={s.fieldWrapper}>
              <label htmlFor="age">Age *</label>
              <Field
                className={s.input}
                id="age"
                name="age"
                type="number"
                autoComplete="off"
              />
            </div>
            <div className={s.fieldWrapper}>
              <div id="radio-group">Blood Type *</div>
              <div role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="bloodType" value="1" />1
                </label>
                <label>
                  <Field type="radio" name="bloodType" value="2" />2
                </label>
                <label>
                  <Field type="radio" name="bloodType" value="3" />3
                </label>
                <label>
                  <Field type="radio" name="bloodType" value="4" />4
                </label>
              </div>
              <div className={s.fieldWrapper}>
                <label htmlFor="currentWeight">Current Weight *</label>
                <Field
                  className={s.input}
                  id="currentWeight"
                  name="currentWeight"
                  type="number"
                  autoComplete="off"
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CalculatorCalorieForm;

import s from './CalculatorCalorieForm.module.scss';
import Loader from '../../components/common/Loader/Loader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import * as Yup from 'yup';

const CalculatorCalorieForm = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const schema = Yup.object().shape({
    height: Yup.number().required(),
    desiredWeight: Yup.number().required(),
    age: Yup.number().required(),
    currentWeight: Yup.number().required(),
    bloodType: Yup.string().required(),
  });

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
        validationSchema={schema}
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
                render={() => <p>Field is required</p>}
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
                render={() => <p>Field is required</p>}
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
                render={() => <p>Field is required</p>}
              />
            </div>
            <div className={s.fieldWrapper}>
              <div className={s.textLabel} id="radio-group">
                Blood Type *
              </div>
              <div className={s.radioGroup} role="group" aria-labelledby="radio-group">
                <label className={s.radioLabel}>
                  <Field className={s.radoiButton} type="radio" name="bloodType" value="1" /> <span> 1</span>
                </label>
                <label className={s.radioLabel}>
                  <Field className={s.radoiButton} type="radio" name="bloodType" value="2" /> <span> 2</span>
                </label>
                <label className={s.radioLabel}>
                  <Field className={s.radoiButton} type="radio" name="bloodType" value="3" /> <span> 3</span>
                </label>
                <label className={s.radioLabel}>
                  <Field className={s.radoiButton} type="radio" name="bloodType" value="4" /> <span> 4</span>
                </label>
              </div>
              <ErrorMessage
                name="bloodType"
                render={() => <p>Field is required</p>}
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
                render={() => <p>Field is required</p>}
              />
            </div>
            <button className={s.submitButton} type="submit">Start losing Weight</button>
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};

export default CalculatorCalorieForm;

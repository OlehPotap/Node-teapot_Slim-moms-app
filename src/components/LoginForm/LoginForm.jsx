import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../../redux/auth/auth-operations';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import Loader from '../common/Loader/Loader';
import s from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const schema = Yup.object().shape({
    email: Yup.string().trim().email().max(40).required(),
    password: Yup.string().trim().min(8).max(20).matches(/^\S*$/).required(),
  });

  return (
    <section className={s.section}>
      {isLoading && <Loader />}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={({ email, password }) => {
          dispatch(login({ email, password }));
        }}
      >
        <Form className={s.form}>
          <div className={s.container}>
            <div className={s.inputs}>
              <h1>SING IN</h1>
              <div className={s.formDiv}>
                <label htmlFor="email">Email *</label>
                <Field
                  className={s.input}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="email"
                  render={() => <p>Email required</p>}
                />
              </div>
              <div className={s.formDiv}>
                <label htmlFor="password">Password *</label>
                <Field
                  className={s.input}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
                  render={() => <p>Password required</p>}
                />
              </div>
            </div>
            <div className={s.btnContainer}>
              <button type="submit">Login</button>

              <Link to={'/register'} className={s.link}>
                Register
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

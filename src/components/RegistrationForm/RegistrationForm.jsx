import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signup } from '../../redux/auth/auth-operations';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import Loader from '../common/Loader/Loader';
import s from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  // /^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "

  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}/g)
      .max(40)
      .required(),
    email: Yup.string().trim().email().max(40).required(),
    password: Yup.string()
      .trim()
      .min(8)
      .max(20)
      .matches(/(?=.*[a-z])[0-9a-zA-Z]{8,}/g)
      .required(),
  });

  return (
    <section className={s.section}>
      {isLoading && <Loader />}
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={({ name, email, password }) => {
          dispatch(signup({ name, email, password }));
        }}
      >
        <Form className={s.form}>
          <div className={s.container}>
            <div className={s.inputs}>
              <h1>Register</h1>
              <div className={s.formDiv}>
                <label htmlFor="name">Name *</label>
                <Field
                  className={s.input}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="name"
                  render={() => <p>Pleasr type your name</p>}
                />
              </div>
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
              <button type="submit">Register</button>

              <Link to={'/login'} className={s.link}>
                Login
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default RegistrationForm;

import { LoginBG } from '../../components/LoginForm/LoginBG/LoginBG';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <LoginForm className={s.form} />
      <LoginBG />
    </div>
  );
};

export default LoginPage;

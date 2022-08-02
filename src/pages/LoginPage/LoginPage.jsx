import Container from '../../components/common/Container/Container';
import MainBG from '../../components/MainBG/MainBG';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm className={s.form} />
      <MainBG />
    </Container>
  );
};

export default LoginPage;

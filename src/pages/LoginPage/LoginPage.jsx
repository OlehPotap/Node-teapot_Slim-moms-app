import Container from '../../components/common/Container/Container';
import MainBG from '../../components/MainBG/MainBG';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <MainBG />
    </Container>
  );
};

export default LoginPage;

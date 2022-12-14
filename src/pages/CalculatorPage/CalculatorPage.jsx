import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG/PrivatePagesBG';
import CalculatorCalorieForm from '../../components/CalculatorŠ”alorieForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <>
      <Container>
        <PrivatePagesBG />
        <CalculatorCalorieForm />
      </Container>
      <RightSideBar />
    </>
  );
};

export default CalculatorPage;

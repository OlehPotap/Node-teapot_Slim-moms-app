import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG/PrivatePagesBG';
import CalculatorCalorieForm from '../../components/CalculatorСalorieForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import s from './CalculatorPage.module.scss';

const CalculatorPage = () => {
  return (
    <>
      <Container>
        <PrivatePagesBG />
        {/* <div className={s.wrapper}> */}
        <CalculatorCalorieForm />
        {/* </div> */}
      </Container>
      <RightSideBar />
    </>
  );
};

export default CalculatorPage;

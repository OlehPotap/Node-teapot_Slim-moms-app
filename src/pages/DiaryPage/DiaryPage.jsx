
import { useMediaQuery } from 'react-responsive';
import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryPageMobile from './DiaryPageMobile/DiaryPageMobile';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';

import RightSideBar from '../../components/RightSideBar/RightSideBar';



const DiaryPage = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  return (
    <>
      <Container>
        <PrivatePagesBG />
        {isMobile ? (
          <DiaryPageMobile>
            <DiaryProductsList />
          </DiaryPageMobile>
        ) : (
          <DiaryAddProductForm />
        )}
        {!isMobile && <DiaryProductsList />}
      </Container>
      <RightSideBar />
      </>
  );
};

export default DiaryPage;

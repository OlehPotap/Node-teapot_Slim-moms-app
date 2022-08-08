import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { allCategories } from '../../redux/categories/categories-operations';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const DiaryPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(allCategories());
  // }, [dispatch]);
  return (
    <>
      <Container>
        <PrivatePagesBG />
        <DiaryAddProductForm />
      </Container>
      <RightSideBar />
    </>
  );
};

export default DiaryPage;

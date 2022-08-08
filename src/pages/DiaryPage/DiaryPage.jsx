import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';

import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { getDailyProducts } from '../../redux/products/products-operations';
import { format } from 'date-fns';



const DiaryPage = () => {
  // const dispatch= useDispatch()
  // useEffect(()=>{
  //   dispatch(getDailyProducts(format(new Date(), "yyyyMMdd")));
  // },[dispatch])
  return (
    <>
      <Container>
        <PrivatePagesBG />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </Container>
      <RightSideBar />
      </>
  );
};

export default DiaryPage;

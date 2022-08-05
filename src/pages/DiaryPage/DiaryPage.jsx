import React, { useState } from 'react';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryAddProductFormModal from '../../components/diaryAddProductForm/DiaryAddProductFormModal';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import s from './DiaryPage.module.scss';
// import { Component } from 'react';
import Calendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
// import Autocomplete from "react-autocomplete";
// import RightSideBar from '../../components/rightSideBar/RightSideBar';
import useMedia from 'use-media';

const DiaryPage = () => {
  const [state, setState] = useState(false);

  const isWide = useMedia({ minWidth: '768px' });

  const openModal = event => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

  return (
    <section className={s.diarySection}>
      {state && (
        <DiaryAddProductFormModal closeModal={closeModal}>
          <DiaryAddProductForm closeModal={closeModal} />
        </DiaryAddProductFormModal>
      )}

      <div className={s.container}>
        <div className={s.dateAndCalendar}>
          <Calendar />
          <img className={s.calendarImage} src="./calendar 1.svg" alt="" />
          <svg width="18" height="20" className={s.calendarImage}>
            {/* подключить иконку календаря */}
            {/* <use href="./symbol-defs.svg.svg#calendar"></use> */}
          </svg>
        </div>

        {isWide && <DiaryAddProductForm />}

        <DiaryProductList openModalProp={openModal} />
      </div>

      {/* <div className={s.summary}><RightSideBar /></div> */}
    </section>
  );
};

export default DiaryPage;

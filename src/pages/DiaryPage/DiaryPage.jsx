import Container from '../../components/common/Container';
import PrivatePagesBG from '../../components/PrivatePagesBG';


const DiaryPage = () => {

  return (
    <Container>
    <PrivatePagesBG />
    </Container>
    // <section className={s.diarySection}>
    //   {state && (
    //     <DiaryAddProductFormModal closeModal={closeModal}>
    //       <DiaryAddProductForm closeModal={closeModal} />
    //     </DiaryAddProductFormModal>
    //   )}

      // <div className={s.container}>
      //   <div className={s.dateAndCalendar}>
      //     {/* <Calendar /> */}
      //     <img className={s.calendarImage} src="./calendar 1.svg" alt="" />
      //     <svg width="18" height="20" className={s.calendarImage}>
      //       {/* подключить иконку календаря */}
      //       {/* <use href="./symbol-defs.svg.svg#calendar"></use> */}
      //     </svg>
      //   </div>

        // {/* {isWide && <DiaryAddProductForm />} */}

        // <DiaryProductList openModalProp={openModal} />
      // </div>

      // {/* <div className={s.summary}><RightSideBar /></div> */}
    // </section>
  );
};

export default DiaryPage;

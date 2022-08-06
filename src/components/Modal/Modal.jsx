import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FrobidenProductsList from './ForbidenProductsList';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/symbol-defs.svg';

import s from './Modal.module.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const modalRoot = document.getElementById('modal-root');

const Modal = ({ handleClose, children, givenCalories, givenProducts }) => {
  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  });

  console.log(givenProducts);

  const close = e => {
    if (e.code === 'Escape') {
      return handleClose();
    }
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const [isMobile, setIsMobile] = useState(false);
  const Component = () => {
    const { width } = useWindowDimensions();
    if (width === 320) {
      setIsMobile(true);
      return (
        <div className={s.additional_bar} onClick={close}>
          <svg className={s.additional_barx}>
            <use href={sprite + '#icon-left-arrow'}></use>
          </svg>
          {/* width: {width} ~ height: {height} */}
        </div>
      );
    } else {
      setIsMobile(false);
    }
  };

  return createPortal(
    <div onClick={close} className={s.overlay}>
      <div className={s.content}>
        <Component />
        <div className={s.modal_main_wrapper}>
          <h2 className={s.modalh2}>
            Your recommended daily <br></br> calorie intake is
          </h2>
          <div className={s.modal_second_wrapper}>
            <span className={s.modalkkal}>
              {givenCalories} <span className={s.modalkkal_text}> kkal</span>
            </span>
            <span className={s.horizontal_line}></span>
            <h3 className={s.products_header}>Foods you should not eat</h3>
            {/* <ol className={s.list_set}> */}
            <FrobidenProductsList givenProducts={givenProducts} />
            {/* </ol> */}
            <div>
              <NavLink to="/login" exact="true" className={s.loose_weight_btn}>
                Start losing Weight
              </NavLink>
            </div>
          </div>
        </div>
        {!isMobile && (
          <span onClick={close} className={s.close}>
            <svg className={s.svgx} onClick={close}>
              <use href={sprite + '#icon-close'} onClick={close}></use>
            </svg>
          </span>
        )}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

// class Modal extends Component {
//     componentDidMount() {
//         document.addEventListener("keydown", this.close)
//     }

//     componentWillUnmount() {
//         document.removeEventListener("keydown", this.close)
//     }

//     close = (e)=> {
//         if(e.code === "Escape") {
//             return this.props.handleClose();
//         }
//         if(e.target === e.currentTarget) {
//             this.props.handleClose()
//         }
//     }

//     render () {
//         const {children} = this.props;
//         const {close} = this;

//         return createPortal((
//             <div onClick={close} className={styles.overlay}>
//                 <div className={styles.content}>
//                     <span onClick={close} className={styles.close}>X</span>
//                     {children}
//                 </div>
//             </div>
//         ), modalRoot)
//     }
// }

export default Modal;

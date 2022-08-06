import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ handleClose, children, givenCalories, givenProducts }) => {
  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  });

  const close = e => {
    if (e.code === 'Escape') {
      return handleClose();
    }
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <div onClick={close} className={s.overlay}>
      <div className={s.content}>
        <div className={s.modal_main_wrapper}>
          <h2 className={s.modalh2}>
            Your recommended daily <br></br> calorie intake is
          </h2>
          <div className={s.modal_second_wrapper}>
            <span className={s.modalkkal}>
              {givenCalories} <span className={s.modalkkal_text}> kkal</span>
            </span>
            <span className={s.horizontal_line}></span>
            <h3 className="products_header">Foods you should not eat</h3>
            <ol className="list_set" id="id2">
              {givenProducts}
            </ol>
          </div>
        </div>

        <span onClick={close} className={s.close}>
          X
        </span>
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

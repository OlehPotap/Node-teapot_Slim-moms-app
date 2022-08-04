import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ handleClose, children, givenCalories }) => {
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
        <span>Calories {givenCalories}</span>
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

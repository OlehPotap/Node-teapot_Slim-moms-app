import { Link } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';

import s from './BackArrow.module.scss';

const BackArrow = () => {
  return (
    <Link to={'/'}>
      <svg className={s.icon}>
        <use href={sprite + '#icon-left-arrow'}></use>
      </svg>
    </Link>
  );
};

export default BackArrow;

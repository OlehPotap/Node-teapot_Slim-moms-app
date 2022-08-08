import s from './DiaryProductsListItem.module.scss';
import sprite from '../../assets/images/symbol-defs.svg';
import {deleteProduct} from '../../redux/products/products-operations.js';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const DiaryProductsListItem = ({title, weight, calories, _id}) => {
  const dispatch = useDispatch()
  const location = useLocation();
  const date = location.search?.split('=')[1];
  return (
    <>
      <li className={s.item}>
        <p className={s.product}>{title}</p>
        <p className={s.weight}>{weight} g</p>
        <p className={s.calories}>{calories} kcal</p>
        <button className={s.btn} onClick={()=>{dispatch(deleteProduct({_id, date}))}} type="button">
          <svg className={s.icon} width="10" height="10">
            <use href={`${sprite + '#icon-delete'}`}></use>
          </svg>
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;

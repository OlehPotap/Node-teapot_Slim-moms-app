import s from './DiaryProductsListItem.module.scss';
import sprite from '../../assets/images/symbol-defs.svg';

const DiaryProductsListItem = () => {
  return (
    <>
      <li className={s.item}>
        <p className={s.product}>Eggplant</p>
        <p className={s.weight}>100 g</p>
        <p className={s.calories}>320 kcal</p>
        <button className={s.btn} onClick={null} type="button">
          <svg className={s.icon} width="10" height="10">
            <use href={`${sprite + '#icon-delete'}`}></use>
          </svg>
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;

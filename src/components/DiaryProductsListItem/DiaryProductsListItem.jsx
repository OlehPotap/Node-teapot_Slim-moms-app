import s from './DiaryProductsListItem.module.scss';
import sprite from '../../assets/images/symbol-defs.svg';

const DiaryProductsListItem = ({title, weight, calories, id}) => {
  return (
    <>
      <li className={s.item}>
        <p className={s.product}>{title}</p>
        <p className={s.weight}>{weight} g</p>
        <p className={s.calories}>{calories} kcal</p>
        <button className={s.btn} onClick={()=>{console.log(id)}} type="button">
          <svg className={s.icon} width="10" height="10">
            <use href={`${sprite + '#icon-delete'}`}></use>
          </svg>
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;

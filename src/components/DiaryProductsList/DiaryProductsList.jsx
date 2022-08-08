import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';
const DiaryProductsList = () => {
  return (
    <div className={s.products}>
      <ul className={s.list}>
        <DiaryProductsListItem />
      </ul>
    </div>
  );
};

export default DiaryProductsList;

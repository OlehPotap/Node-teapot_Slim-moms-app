import { useSelector, useDispatch } from 'react-redux';
import { filter, map } from 'lodash';
import { changeFilter } from '../../../redux/categories/categories-slice';
import {
  getFilter,
  getAllCategories,
} from '../../../redux/categories/categories-selectors';
import s from './HelperListProducts.module.scss';

const HelperListProducts = () => {
  const productList = useSelector(getAllCategories);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredProduct = () => {
    const normalizeProductName = filtered?.toLowerCase();
    const uaTitle = map(productList, item => item.title.ua);
    return filter(uaTitle, item =>
      item.toLowerCase().includes(normalizeProductName)
    );
  };
  const list = filteredProduct();

  return (
    <ul className={s.list}>
      {list.length < 25 ? (
        map(list, item => (
          <li key={item} className={s.item}>
            <button
              className={s.item__btn}
              onClick={() => dispatch(changeFilter(item))}
              type="button"
            >
              {item}
            </button>
          </li>
        ))
      ) : (
        <li className={s.item}>Continue write ...</li>
      )}
    </ul>
  );
};

export default HelperListProducts;

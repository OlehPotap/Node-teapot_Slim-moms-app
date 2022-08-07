import { useSelector } from 'react-redux';
import { filter, map } from 'lodash';
import {
  getAllCategories,
} from '../../../redux/categories/categories-selectors';
import s from './HelperListProducts.module.scss';

const HelperListProducts = ({search, setSearch}) => {
  
  const productList = useSelector(getAllCategories);

  const filteredProduct = () => {
    const normalizeProductName = search?.toLowerCase();
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
              onClick={() => setSearch(item)}
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

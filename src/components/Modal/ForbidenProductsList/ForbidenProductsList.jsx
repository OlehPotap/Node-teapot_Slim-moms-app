import FrobidenProductsListItem from './FrobidenProductsListItem';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux/es/exports';
import { getForbidenCategories } from '../../../redux/categories/categories-selectors';
import k from './ForbidenProductsList.module.scss';

const ForbidenProductsList = () => {
  const givenProducts = useSelector(getForbidenCategories);

  const List = givenProducts?.map(el => {
    return <FrobidenProductsListItem el={el} key={uuidv4()} />;
  });
  return <ol className={k.unrec_prod_list}>{List}</ol>;
};

export default ForbidenProductsList;

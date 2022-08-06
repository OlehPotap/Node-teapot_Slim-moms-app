import FrobidenProductsListItem from './FrobidenProductsListItem';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux/es/exports';
import {getForbidenCategories} from '../../../redux/categories/categories-selectors'

const ForbidenProductsList = () => {

  const givenProducts = useSelector(getForbidenCategories)

  const List = givenProducts?.map(el => {
    return <FrobidenProductsListItem el={el} key={uuidv4()}/>;
  });
  return <ol>{List}</ol>;
};

export default ForbidenProductsList;

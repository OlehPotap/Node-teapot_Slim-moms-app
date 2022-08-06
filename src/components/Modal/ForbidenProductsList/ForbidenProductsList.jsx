import FrobidenProductsListItem from './FrobidenProductsListItem';
import { v4 as uuidv4 } from 'uuid';

const ForbidenProductsList = ({givenProducts}) => {

  const List = givenProducts.map(el => {
    return <FrobidenProductsListItem el={el} key={uuidv4()}/>;
  });
  return <ol>{List}</ol>;
};

export default ForbidenProductsList;

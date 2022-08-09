import axios from 'axios';


//  и передать редаксу для записи в хранилище что-бы потом отобразить в форме поиска продуктов.
const getAll = async () => {
  const result = await axios.get('/categories');
  return result;

};

const authAPI = {
  getAll,
};

export default authAPI;

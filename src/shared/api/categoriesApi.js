import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api/products-list';

// const addToken = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

// Данный запрос должен вернуть список всех категорий продуктов из базы продуктов
//  и передать редаксу для записи в хранилище что-бы потом отобразить в форме поиска продуктов.
const getAll = async () => {
  const result = await axios.get('/');
  return result;
  // const {data: result} = await axios.get("/", data);
  // addToken(result.token);
  // return result;
};
// Этот запрос должен вернуть объект выбранного продукта из коллекции "categories"
// и передать редаксу для записи в хранилище что-бы потом по сабмиту формы
//  отправить объект продукта который засабмитил пользовател на бекенд в коллекцию "products"
const getOne = async id => {
  // const {owner: result} = await axios.get("/products", owner);
  // addToken(result.token);
  // return result;
};

const authAPI = {
  getAll,
  getOne,
};

export default authAPI;

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api/';


const getAll = async owner => {
  // const {owner: result} = await axios.get("/products", owner);
  // addToken(result.token);
  // return result;
};

const add = async info => {
  try {
    const {data} = await axios
      .post('/diary/add', info)
      return data
  } catch (error) {
    console.error(error.message);
  }
};


const remove = async id => {
  // const {id: result} = await axios.delete("/products", id);
  // return result;
};

const authAPI = {
  getAll,
  add,
  remove,
};

export default authAPI;

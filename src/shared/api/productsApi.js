import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api/';


const getAll = async (date) => {
  try {
    const {data} = await axios
      .get(`/diary/${date}`)
      return data
  } catch (error) {
    console.error(error.message);
  }
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


const remove = async data => {
  const {id: result} = await axios.patch("/delete", data);
  return result;
};

const authAPI = {
  getAll,
  add,
  remove,
};

export default authAPI;

import axios from 'axios';


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
  const {data: result} = await axios.patch("/diary/delete", data);
  return result;
};

const authAPI = {
  getAll,
  add,
  remove,
};

export default authAPI;

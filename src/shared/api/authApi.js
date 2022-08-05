import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api';

const addToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Для примера оставил закомментированным некоторый код из материалов которые дал Богдан.

const signup = async owner => {
  const {data} = await axios.post("/users/register", owner);
  addToken(data.token);
  return data;
};

const login = async owner => {
  const { data } = await axios.post('/users/login', owner);
  addToken(data.token);
  return data;
};

const logout = async () => {
  await axios.post('/users/logout');
  removeToken();
  // return data;
};

const getCurrent = async token => {
  // addToken(token);
  // const {data: result} = await axios.get("/users/current");
  // return result;
};

const authAPI = {
  signup,
  login,
  logout,
  getCurrent,
};

export default authAPI;

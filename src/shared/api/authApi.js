import axios from 'axios';

axios.defaults.baseURL = '';

const addToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Для примера оставил закомментированным некоторый код из материалов которые дал Богдан.

const signup = async owner => {
  // const {owner: result} = await axios.post("/users/signup", owner);
  // addToken(result.token);
  // return result;
};

const login = async owner => {
  const { data } = await axios.post('/users/login', owner);
  addToken(data.token);
  return data;
};

const logout = async () => {
  // const {data: result} = await axios.post("/users/logout");
  // return result;
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

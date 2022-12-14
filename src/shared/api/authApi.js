import axios from 'axios';

axios.defaults.baseURL = 'https://slim-moms-backend.herokuapp.com/api/';

const addToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const signup = async owner => {
  const { data } = await axios.post('/users/register', owner);
  addToken(data.token);
  return data;
};

const login = async owner => {
  const data = await axios.post('/users/login', owner);
  addToken(data.data.token);
  return data;
};

const logout = async () => {
  await axios.get('/users/logout');
  removeToken();
  // return data;
};

const getCurrent = async token => {
  addToken(token);
  const { data: result } = await axios.get('/users/current');
  return result;
};

const updateUserInfo = async userInfo => {
  const { data: result } = await axios.patch('/users/updateUserInfo', userInfo);
  return result;
};

const authAPI = {
  signup,
  login,
  logout,
  getCurrent,
  updateUserInfo,
};

export default authAPI;

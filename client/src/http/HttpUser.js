import axios from "axios";

export const tryLogIn = (username, password) =>
  axios.post(`/api/users/login`, { username, password });

export const trySignUp = (obj) => axios.post(`/api/users/signup`, { obj });

export const checkToken = (token) => {
  return axios.get(`/api/users/checkToken`, { headers: { token: token } });
};

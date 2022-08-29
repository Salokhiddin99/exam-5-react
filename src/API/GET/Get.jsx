import axios from "axios";

const BASE_URL = "https://api.github.com/users/";
const get = {
  getUser: (user) => axios.get(BASE_URL + user),
};
export default get;

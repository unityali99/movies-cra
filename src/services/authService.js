import config from "./config.json";
import axios from "axios";
import { toastify } from "../utils/toastify";
import { ERROR, SUCCESS, WARNING } from "../utils/toastColors";
import { TOKEN } from "../utils/token";

const apiEndPoint = config.baseUrl + "/auth";

export const login = async (data) => {
  try {
    const token = await axios.post(apiEndPoint, data);
    toastify("You're Logged in.", SUCCESS);
    return token.data;
  } catch (err) {
    toastify(err.response.data, ERROR);
  }
};

export const logout = (setToken) => {
  setToken("");
  toastify("Logged Out.", WARNING);
};

export const getJwt = () => {
  return localStorage.getItem(TOKEN);
};

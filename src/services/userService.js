import axios from "axios";
import { toastify } from "../utils/toastify";
import config from "./config.json";

const apiEndPoint = config.baseUrl + "/users";

export const saveUser = async (user) => {
  try {
    const res = await axios.post(apiEndPoint, user);
    const userInfo = await res.data;
    toastify(`Registration completed. Welcome ${userInfo.name}!`);
  } catch (err) {
    toastify(err.message);
  }
};

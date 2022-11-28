import axios from "axios";
import { ERROR, SUCCESS } from "../utils/toastColors";
import { toastify } from "../utils/toastify";
import config from "./config.json";

const apiEndPoint = config.baseUrl + "/users";

export const saveUser = async (user) => {
  try {
    await axios.post(apiEndPoint, user);
    toastify("Registration completed. Login to continue.", SUCCESS);
  } catch (err) {
    toastify(err.response.data, ERROR);
  }
};

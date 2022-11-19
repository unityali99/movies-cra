import axios from "axios";
import { toastify } from "../utils/toastify";
import config from "./config.json";

const apiEndPoint = config.baseUrl + "/genres";

export async function getGenres() {
  try {
    const res = await axios.get(apiEndPoint);
    const genres = await res.data;
    return genres;
  } catch (err) {
    toastify(err.message);
  }
}

export async function getGenre(id) {
  try {
    const res = await axios.get(apiEndPoint + "/" + id);
    const genre = await res.data;
    return genre;
  } catch (err) {
    toastify(err.message);
  }
}

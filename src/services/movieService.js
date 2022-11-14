import axios from "axios";
import config from "./config.json";

const apiEndPoint = config.baseUrl + "/movies";

export async function getMovies() {
  try {
    const res = await axios.get(apiEndPoint);
    const movies = await res.data;
    return movies;
  } catch (err) {
    console.log(err);
  }
}

export async function getMovie(id) {
  try {
    const res = await axios.get(apiEndPoint + "/" + id);
    const movies = await res.data;
    return movies;
  } catch (err) {
    console.log(err);
  }
}

import axios from "axios";
import { toastify } from "../utils/toastify";
import config from "./config.json";

const apiEndPoint = config.baseUrl + "/movies";

export async function getMovies() {
  try {
    const res = await axios.get(apiEndPoint);
    const movies = await res.data;
    return movies;
  } catch (err) {
    toastify(err.message);
  }
}

export async function getMovie(id) {
  try {
    const res = await axios.get(apiEndPoint + "/" + id);
    const movies = await res.data;
    return movies;
  } catch (err) {
    toastify(err.message);
  }
}

export async function deleteMovie(id) {
  try {
    const res = await axios.delete(apiEndPoint + "/" + id);
    const deletedMovie = await res.data;
    toastify(`The Movie '${deletedMovie.title}' has been deleted.`);
  } catch (err) {
    toastify(err.message);
  }
}
export async function saveMovie(movie) {
  try {
    let res;
    if (movie._id) {
      res = await axios.put(apiEndPoint + "/" + movie._id, {
        title: movie.title,
        numberInStock: Number(movie.numberInStock),
        dailyRentalRate: Number(movie.dailyRentalRate),
        genreId: movie.genreId,
      });
    } else {
      res = await axios.post(apiEndPoint, {
        title: movie.title,
        numberInStock: Number(movie.numberInStock),
        dailyRentalRate: Number(movie.dailyRentalRate),
        genreId: movie.genreId,
      });
    }
    toastify(`Movie ${res.data.title} saved.`);
    return res;
  } catch (err) {
    toastify(err.response.data);
  }
}

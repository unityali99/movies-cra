import { Navigate, useParams } from "react-router-dom";
import { getMovie } from "../services/fakeMovieService";
import AddMovie from "./AddMovie";

const MovieEdit = () => {
  const { id } = useParams();
  const targetMovie = getMovie(id);

  if (targetMovie) return <AddMovie movie={targetMovie} />;
  return <Navigate to="/not-found" />;
};

export default MovieEdit;

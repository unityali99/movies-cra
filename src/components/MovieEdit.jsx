import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getMovie } from "../services/movieService";
import AddMovie from "./AddMovie";

const MovieEdit = () => {
  const { id } = useParams();
  const [targetMovie, setTargetMovie] = useState(null);

  getMovie(id)
    .then((mov) => {
      setTargetMovie(mov);
      console.log(mov);
    })
    .catch((err) => console.log(err));

  console.log(targetMovie);
  if (targetMovie) return <AddMovie movie={targetMovie} />;
  return <Navigate to="/not-found" />;
};

export default MovieEdit;

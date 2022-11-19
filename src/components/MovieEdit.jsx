import React, { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";
import { Navigate, useParams } from "react-router-dom";
import { getMovie } from "../services/movieService";
import AddMovie from "./AddMovie";
import awesomePlaceholder from "./common/FormPlaceholder";

const MovieEdit = () => {
  const { id } = useParams();
  const [targetMovie, setTargetMovie] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getMovie(id).then((mov) => {
      setIsFetching(false);
      setTargetMovie(mov);
    });
  }, [id]);

  return (
    <ReactPlaceholder
      customPlaceholder={awesomePlaceholder}
      ready={!isFetching}
      showLoadingAnimation
    >
      {targetMovie ? (
        <AddMovie movie={targetMovie} />
      ) : (
        <Navigate to="/not-found" />
      )}
    </ReactPlaceholder>
  );
};

export default MovieEdit;

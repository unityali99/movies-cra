import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <div className="container my-5">
      <h2>Movie ID: {id}</h2>
      <Link
        role="button"
        to="/movies"
        className="btn btn-primary btn-lg btn-outline-warning my-4"
      >
        Return
      </Link>
    </div>
  );
};

export default SingleMovie;

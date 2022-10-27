import React, { useState } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getMoviesByPage } from "../utils/pagine";
import GenreList from "./common/GenreList";
import MoviesTable from "./common/MoviesTable";
import Pagination from "./common/Pagination";
import _ from "lodash";
import Nav from "./common/Nav";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const [allMovies, setAllMovies] = useState(getMovies());
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentSortValue, setCurrentSortValue] = useState("title");

  const handleDelete = (movie) => {
    deleteMovie(movie._id);
    setAllMovies([...getMovies()]);
  };

  const handleLikeChange = (mov) => {
    let movies = [...allMovies];
    const index = movies.indexOf(mov);
    movies[index].liked = !movies[index].liked;
    setAllMovies(movies);
  };

  const handleGenreChange = (genre) => {
    setCurrentPage(1);
    genre === "All"
      ? setAllMovies(getMovies())
      : setAllMovies(getMovies().filter((mov) => mov.genre.name === genre));
    setCurrentGenre(genre);
  };
  console.log();

  const sortedMovies = _.sortBy(allMovies, [currentSortValue]);
  const movies = getMoviesByPage(sortedMovies, currentPage, pageSize);

  if (allMovies.length === 0)
    return (
      <React.Fragment>
        <h4 className="text-center font-weight-bold p-3">
          {"There are no movies in the database"}
        </h4>
        <div className="col-2">
          <GenreList
            currentGenre={currentGenre}
            onGenreChange={handleGenreChange}
          />
        </div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <h4 className="text-center font-weight-bold p-3 ">{`There are ${allMovies.length} movies in the database.`}</h4>
      <div className="row align-items-center">
        <div className="col-2">
          <GenreList
            currentGenre={currentGenre}
            onGenreChange={handleGenreChange}
          />
        </div>
        <div className="col-10 p-2">
          <MoviesTable
            onLike={handleLikeChange}
            onDelete={handleDelete}
            movies={movies}
            onSort={{ currentSortValue, setCurrentSortValue }}
          />
        </div>
      </div>
      <Pagination
        itemCount={allMovies.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
      <Outlet />
    </React.Fragment>
  );
};

export default Movies;

import React, { useEffect, useState } from "react";
import { deleteMovie } from "../services/fakeMovieService";
import { getMovies } from "../services/movieService";
import { getMoviesByPage } from "../utils/pagine";
import GenreList from "./common/GenreList";
import MoviesTable from "./common/MoviesTable";
import Pagination from "./common/Pagination";
import _ from "lodash";
import { Outlet } from "react-router-dom";
import Input from "./common/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Movies = () => {
  const [dbMovies, setDbMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentSortValue, setCurrentSortValue] = useState("title");
  const { register } = useForm();

  useEffect(() => {
    getMovies().then((movies) => setDbMovies(movies));
  }, []);

  useEffect(() => {
    setAllMovies(dbMovies);
  }, [dbMovies]);

  const handleDelete = (movie) => {
    deleteMovie(movie._id);
    setAllMovies([...dbMovies]);
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
      ? setAllMovies(dbMovies)
      : setAllMovies(dbMovies.filter((mov) => mov.genre.name === genre));
    setCurrentGenre(genre);
  };

  const handleSearch = (inputValue) => {
    setCurrentGenre("All");
    setCurrentPage(1);
    if (inputValue)
      return setAllMovies(
        dbMovies.filter((value) =>
          value.title
            .toLowerCase()
            .trim()
            .includes(inputValue.toLowerCase().trim())
        )
      );
    setAllMovies(dbMovies);
  };

  const sortedMovies = _.sortBy(allMovies, [currentSortValue]);
  const movies = getMoviesByPage(sortedMovies, currentPage, pageSize);

  return (
    <React.Fragment>
      <Input
        onChange={(e) => handleSearch(e.target.value)}
        label="Search a movie:"
        placeholder="Movie Name"
        register={register("search")}
        name="search"
      />
      <div className="text-center">
        <Link
          className="btn btn-primary btn-outline-warning px-4 py-2"
          to="/add-movie"
        >
          Add Movie
        </Link>
      </div>
      {allMovies.length === 0 && (
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
      )}
      {allMovies.length !== 0 && (
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
      )}
    </React.Fragment>
  );
};

export default Movies;

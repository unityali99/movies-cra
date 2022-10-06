import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getMoviesByPage } from "../utils/pagine";
import GenreList from "./GenreList";
import HeartIcon from "./HeartIcon";
import Pagination from "./Pagination";

const MoviesList = () => {
  const [allMovies, setAllMovies] = useState(getMovies());
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("All");

  const handleDelete = (movie) => {
    setAllMovies(allMovies.filter((m) => m._id !== movie._id));
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
    console.log(genre);
    setCurrentGenre(genre);
  };

  const movies = getMoviesByPage(allMovies, currentPage, pageSize);

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
    <div className="container-fluid">
      <h4 className="text-center font-weight-bold p-3 ">{`There are ${allMovies.length} movies in the database.`}</h4>
      <div className="row align-items-center">
        <div className="col-2">
          <GenreList
            currentGenre={currentGenre}
            onGenreChange={handleGenreChange}
          />
        </div>
        <div className="col-10 p-2">
          <table className="table table-dark text-center">
            <thead>
              <tr>
                <th>row</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Number In Stock</th>
                <th></th>
                <th>Daily Rental Rate</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.genre.name}</td>
                  <td>{value.numberInStock}</td>
                  <td>
                    <HeartIcon
                      onLikeChange={() => handleLikeChange(value)}
                      liked={value.liked}
                    />
                  </td>
                  <td>{value.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(value)}
                      className="btn btn-danger btn-outline-warning text-white"
                    >
                      {"Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        itemCount={allMovies.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MoviesList;

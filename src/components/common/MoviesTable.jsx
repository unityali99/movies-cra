import HeartIcon from "./HeartIcon";
import Table from "./Table";

const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
  const columnArray = [
    { columnValue: "title", columnText: "Title" },
    { columnValue: "genre.name", columnText: "Genre" },
    { columnValue: "numberInStock", columnText: "In Stock" },
    {
      content: (movie) => (
        <HeartIcon onLikeChange={() => onLike(movie)} liked={movie.liked} />
      ),
    },
    { columnValue: "dailyRentalRate", columnText: "Daily Rental Rate" },
    {
      content: (mpvie) => (
        <button
          onClick={() => onDelete(mpvie)}
          className="btn btn-danger btn-outline-warning text-white"
        >
          {"Delete"}
        </button>
      ),
    },
  ];
  return <Table movies={movies} columnArray={columnArray} onSort={onSort} />;
};

export default MoviesTable;

import HeartIcon from "./HeartIcon";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

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
  return (
    <table className="table table-dark text-center">
      <TableHeader onSort={onSort} columnArray={columnArray} />
      <TableBody data={movies} columns={columnArray} />
    </table>
  );
};

export default MoviesTable;

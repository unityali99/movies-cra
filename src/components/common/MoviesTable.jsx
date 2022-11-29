import HeartIcon from "./HeartIcon";
import Table from "./Table";

const MoviesTable = ({ movies, onLike, onDelete, onSort, user }) => {
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
    ,
  ];

  const deleteColumn = {
    content: (movie) => (
      <button
        onClick={() => onDelete(movie)}
        className="btn btn-danger btn-outline-warning text-white"
      >
        {"Delete"}
      </button>
    ),
  };

  if (user && user.isAdmin) columnArray.push(deleteColumn);
  return <Table movies={movies} columnArray={columnArray} onSort={onSort} />;
};

export default MoviesTable;

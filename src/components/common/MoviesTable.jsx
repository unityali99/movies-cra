import HeartIcon from "./HeartIcon";
import TableHeader from "./TableHeader";

const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
  const columnArray = [
    { columnValue: "title", columnText: "Title" },
    { columnValue: "genre.name", columnText: "Genre" },
    { columnValue: "numberInStock", columnText: "In Stock" },
    {},
    { columnValue: "dailyRentalRate", columnText: "Daily Rental Rate" },
    {},
  ];
  return (
    <table className="table table-dark text-center">
      <TableHeader onSort={onSort} columnArray={columnArray} />
      <tbody>
        {movies.map((value, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{value.title}</td>
            <td>{value.genre.name}</td>
            <td>{value.numberInStock}</td>
            <td>
              <HeartIcon
                onLikeChange={() => onLike(value)}
                liked={value.liked}
              />
            </td>
            <td>{value.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => onDelete(value)}
                className="btn btn-danger btn-outline-warning text-white"
              >
                {"Delete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;

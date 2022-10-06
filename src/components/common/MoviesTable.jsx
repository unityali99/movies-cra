import HeartIcon from "./HeartIcon";

const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
  const cursorStyle = { cursor: "pointer" };
  return (
    <table className="table table-dark text-center">
      <thead>
        <tr>
          <th>row</th>
          <th style={cursorStyle} onClick={() => onSort("title")}>
            Title
          </th>
          <th style={cursorStyle} onClick={() => onSort("genre.name")}>
            Genre
          </th>
          <th style={cursorStyle} onClick={() => onSort("numberInStock")}>
            Number In Stock
          </th>
          <th></th>
          <th style={cursorStyle} onClick={() => onSort("dailyRentalRate")}>
            Daily Rental Rate
          </th>
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

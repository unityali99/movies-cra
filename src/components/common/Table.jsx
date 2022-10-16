import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ onSort, movies, columnArray }) => {
  return (
    <table className="table table-dark text-center table-hover">
      <TableHeader onSort={onSort} columns={columnArray} />
      <TableBody data={movies} columns={columnArray} />
    </table>
  );
};

export default Table;

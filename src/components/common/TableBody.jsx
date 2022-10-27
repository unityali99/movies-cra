import _ from "lodash";
import { useNavigate } from "react-router-dom";

const TableBody = ({ data, columns }) => {
  const navigate = useNavigate();
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.columnValue);
  };
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          {columns.map((column, columnIndex) =>
            column.columnValue === "title" ? (
              <td
                key={columnIndex}
                className="alert-link text-info"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/movies/${item._id}`)}
              >
                {renderCell(item, column)}
              </td>
            ) : (
              <td key={columnIndex}>{renderCell(item, column)}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

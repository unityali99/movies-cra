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
        <tr
          onClick={() =>
            navigate(`/movies/${item._id}`, { state: { title: "action" } })
          }
          role={"button"}
          key={index}
        >
          <td>{index + 1}</td>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

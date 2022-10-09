import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.columnValue);
  };
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
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

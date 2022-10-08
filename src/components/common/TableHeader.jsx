const TableHeader = ({ columnArray, onSort }) => {
  const cursorStyle = { cursor: "pointer" };

  return (
    <thead>
      <tr>
        <th>row</th>
        {columnArray.map((column, index) => (
          <th
            key={index}
            style={column.columnValue ? cursorStyle : {}}
            onClick={column.columnValue ? () => onSort(column.columnValue) : {}}
          >
            {column.columnText}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

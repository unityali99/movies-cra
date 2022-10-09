import SortIcon from "./SortIcon";

const TableHeader = ({ columnArray, onSort }) => {
  return (
    <thead>
      <tr>
        <th>{"Row"}</th>
        {columnArray.map((column, index) => (
          <th
            key={index}
            style={column.columnValue && { cursor: "pointer" }}
            onClick={
              column.columnValue
                ? () => onSort.setCurrentSortValue(column.columnValue)
                : () => {}
            }
            onMouseOver={(e) =>
              column.columnValue && (e.target.style.background = "#424a51")
            }
            onMouseLeave={(e) =>
              column.columnValue && (e.target.style.background = "#343a40")
            }
          >
            {column.columnText}{" "}
            {column.columnValue && (
              <SortIcon
                columnValueInState={onSort.currentSortValue}
                currentColumnValue={column.columnValue}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

import {
  light,
  solid,
  thin,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = ({ columnArray, onSort }) => {
  const cursorStyle = { cursor: "pointer" };

  const renderSortIcon = (currentColumnValue, columnValueInState) => {
    const sortIcon =
      currentColumnValue === columnValueInState
        ? solid("sort-amount-up")
        : solid("sort-amount-down");

    return <FontAwesomeIcon icon={sortIcon} />;
  };

  return (
    <thead>
      <tr>
        <th>{"Row"}</th>
        {columnArray.map((column, index) => (
          <th
            key={index}
            style={column.columnValue && cursorStyle}
            onClick={
              column.columnValue
                ? () => onSort.setCurrentSortValue(column.columnValue)
                : () => {}
            }
          >
            {column.columnText}{" "}
            {column.columnValue &&
              renderSortIcon(column.columnValue, onSort.currentSortValue)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

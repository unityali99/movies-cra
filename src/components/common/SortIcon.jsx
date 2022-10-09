import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortIcon = ({ currentColumnValue, columnValueInState }) => {
  const icon =
    currentColumnValue === columnValueInState
      ? solid("sort-amount-up")
      : solid("sort-amount-down");

  return <FontAwesomeIcon icon={icon} />;
};

export default SortIcon;

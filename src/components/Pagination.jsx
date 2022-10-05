import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, pageSize, currentPage, itemCount }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-lg justify-content-center">
        {pages.map((value) => (
          <li
            key={value}
            className={`page-item ${value === currentPage ? "active" : ""}`}
          >
            {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={() => onPageChange(value)}
                className="page-link"
                style={{ cursor: "pointer" }}
              >
                {value}
              </a>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propType = {
  onPageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default Pagination;

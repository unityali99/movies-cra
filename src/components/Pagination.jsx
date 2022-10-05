import _ from "lodash";

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
                href="#"
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

export default Pagination;

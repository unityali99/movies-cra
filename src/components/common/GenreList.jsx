import { getGenres } from "../../services/fakeGenreService";
import PropTypes from "prop-types";
import { memo, useMemo } from "react";

const GenreList = ({ onGenreChange, currentGenre }) => {
  const cursor = { cursor: "pointer" };
  const genres = useMemo(() => [{ name: "All" }, ...getGenres()], []);
  return (
    <ul className="list-group">
      {genres.map((genre, index) => (
        <a
          style={cursor}
          onClick={() => onGenreChange(`${genre.name}`)}
          key={index}
          className={`list-group-item list-group-item-action ${
            currentGenre === genre.name ? "active" : ""
          }`}
        >
          {genre.name}
        </a>
      ))}
    </ul>
  );
};

GenreList.propType = {
  onGenreChange: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default memo(GenreList);

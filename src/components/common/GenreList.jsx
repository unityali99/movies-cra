import { getGenres } from "../../services/genreService";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import { useEffect } from "react";

const GenreList = ({ onGenreChange, currentGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => {
      data && setGenres([{ name: "All" }, ...data]);
    });
  }, []);

  const cursor = { cursor: "pointer" };

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

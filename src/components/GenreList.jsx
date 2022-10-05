import { getGenres } from "../services/fakeGenreService";

const GenreList = ({ onGenreChange, currentGenre }) => {
  const cursor = { cursor: "pointer" };
  return (
    <ul className="list-group">
      <li
        style={cursor}
        onClick={() => onGenreChange("all")}
        className={`list-group-item ${currentGenre === "all" ? "active" : ""}`}
      >
        {"All Genres"}
      </li>
      {getGenres().map((genre, index) => (
        <li
          style={cursor}
          onClick={() => onGenreChange(`${genre.name}`)}
          key={index}
          className={`list-group-item ${
            currentGenre === genre.name ? "active" : ""
          }`}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;

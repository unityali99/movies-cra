import Input from "./common/Input";
import DropDownList from "./common/DropDownList";
import { useForm } from "react-hook-form";
import { getGenres } from "../services/fakeGenreService";
import Alert from "./common/Alert";
import { saveMovie } from "../services/fakeMovieService";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ movie }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    saveMovie({
      ...movie,
      title: data.title,
      genreId: data.genre,
      numberInStock: data.numberInStock,
      dailyRentalRate: data.dailyRentalRate,
    });
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={movie ? movie.title : ""}
        label="Title: "
        placeholder="Movie's name"
        type="text"
        register={register("title", {
          required: { value: true, message: "Title is required." },
        })}
      />
      <Alert color="danger" message={errors.title?.message} />
      <DropDownList
        defaultValue={movie ? movie.genre._id : ""}
        options={getGenres()}
        label="Genre: "
        register={register("genre", {
          required: { value: true, message: "Please select a genre" },
        })}
      />

      <Input
        defaultValue={movie ? movie.numberInStock : 0}
        label="Number In Stock: "
        placeholder="Movie's name"
        type="number"
        register={register("numberInStock", {
          required: {
            value: true,
            message: "Please enter the number in stock.",
          },
        })}
      />
      <Alert color="danger" message={errors.numberInStock?.message} />

      <Input
        defaultValue={movie ? movie.dailyRentalRate : 0}
        label="Daily Rental Rate: "
        placeholder=""
        type="text"
        register={register("dailyRentalRate", {
          required: { value: true, message: "Daily rental rate is required." },
          max: { value: 5, message: "Maximum daily rental rate is 5." },
        })}
      />
      <Alert color="danger" message={errors.dailyRentalRate?.message} />
      <Input
        type="submit"
        className="btn btn-primary btn-outline-warning mx-auto w-50"
        children={
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-warning w-25"
          >
            {"Return"}
          </button>
        }
      />
    </form>
  );
};

export default AddMovie;

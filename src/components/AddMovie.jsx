import Input from "./common/Input";
import DropDownList from "./common/DropDownList";
import { useForm } from "react-hook-form";
import { getGenres } from "../services/genreService";
import Alert from "./common/Alert";
import { saveMovie } from "../services/movieService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const AddMovie = ({ movie }) => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const submitRef = useRef(null);

  useEffect(() => {
    getGenres().then((genres) => setGenres(genres));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (movie) data._id = movie._id;
    const res = await saveMovie(data);
    if (res.status == 200) submitRef.current.disabled = true;
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
        selectedgenre={movie && movie.genre}
        options={genres}
        label="Genre: "
        register={register("genreId", {
          required: { value: true, message: "Please select a genre." },
        })}
      />
      <div className="my-3">
        <Alert color="danger" message={errors.genreId?.message} />
      </div>

      <Input
        defaultValue={movie ? movie.numberInStock : 0}
        label="Number In Stock: "
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
        type="number"
        register={register("dailyRentalRate", {
          required: {
            value: true,
            message: "Daily rental rate is required.",
          },
          max: { value: 5, message: "Maximum daily rental rate is 5." },
        })}
      />
      <Alert color="danger" message={errors.dailyRentalRate?.message} />
      <Input
        ref={submitRef}
        type="submit"
        className="btn btn-primary btn-outline-warning mx-auto w-50"
        children={
          <button
            onClick={(e) => {
              e.preventDefault();
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

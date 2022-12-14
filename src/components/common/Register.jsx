import Alert from "./Alert";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { saveUser } from "../../services/userService";
import { Navigate, useNavigate } from "react-router-dom";

const Register = ({ token }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    saveUser(data);
    navigate("/");
  };

  if (token) return <Navigate replace={true} to="/" />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container-fluid text-center"
    >
      <Input
        label="Email :"
        placeholder="youremail@example.com"
        register={register("email", {
          required: "Email field is required.",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: "Please provide a valid email.",
          },
        })}
        type="email"
      />
      <Alert color="danger" message={errors.email?.message} />

      <Input
        label="Name :"
        placeholder="First Name"
        register={register("name", {
          required: "Name field is required.",
          minLength: "3",
        })}
        type="name"
      />
      <Alert color="danger" message={errors.name?.message} />

      <Input
        label="Password :"
        placeholder="Enter your password"
        type="password"
        register={register("password", {
          required: "Password field is required.",
          minLength: {
            message: "Password should be at least 5 characters",
            value: 5,
          },
        })}
      />
      <Alert color="danger" message={errors.password?.message} />

      <input type="submit" className="btn btn-primary mx-2 px-4" />
      <input type="reset" className="btn btn-warning mx-2 px-3" />
    </form>
  );
};

export default Register;

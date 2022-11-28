import Alert from "./Alert";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { login } from "../../services/authService";
import { Navigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    login(data).then((jwt) => {
      setToken(jwt);
    });

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
        label="Password :"
        placeholder="Enter your password"
        type="password"
        register={register("password", {
          required: { value: true, message: "Password field is required." },
        })}
      />
      <Alert color="danger" message={errors.password?.message} />

      <input
        value="Login"
        type="submit"
        className="btn btn-primary mx-2 px-4"
      />
      <input type="reset" className="btn btn-warning mx-2 px-3" />
    </form>
  );
};

export default Login;

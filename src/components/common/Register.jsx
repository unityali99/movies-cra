import Alert from "./Alert";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
const Register = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("name"));

  // useEffect(() => {
  //   console.log(errors);

  //   return () => {};
  // }, [errors]);

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
      {errors.email?.message && (
        <Alert color="danger" message={errors.email?.message} />
      )}

      <Input
        label="Name :"
        placeholder="First Name"
        register={register("name", { required: "Name field is required." })}
        type="name"
      />
      {errors.name?.message && (
        <Alert color="danger" message={errors.name?.message} />
      )}

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

      {errors.password?.message && (
        <Alert color="danger" message={errors.password?.message} />
      )}

      <input type="submit" className="btn btn-primary mx-2 px-4" />
      <input type="reset" className="btn btn-warning mx-2 px-3" />
    </form>
  );
};

export default Register;

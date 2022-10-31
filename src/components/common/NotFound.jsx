import { Fragment } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="alert alert-danger w-25 mx-auto text-center">
        {"Not Found"}
        <br />
        <div className="badge badge-warning px-3 mt-2 font-weight-bold">
          <h3 className="text-dark font-weight-bold font-italic">{"404"}</h3>
        </div>
      </div>
      <Input
        type="submit"
        value="Return"
        className="btn btn-primary mx-auto px-5"
        onClick={() => navigate("/movies")}
      />
    </Fragment>
  );
};

export default NotFound;

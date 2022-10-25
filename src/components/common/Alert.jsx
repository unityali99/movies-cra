const Alert = ({ color, message }) => (
  <div className={`alert alert-${color} fade show w-25 mx-auto`}>{message}</div>
);

export default Alert;

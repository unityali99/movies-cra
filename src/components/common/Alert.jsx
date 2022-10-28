const Alert = ({ color, message }) =>
  message && (
    <div className={`alert alert-${color} fade show w-25 mx-auto text-center`}>
      {message}
    </div>
  );

export default Alert;

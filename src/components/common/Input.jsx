const Input = ({ label, placeholder, type, register }) => (
  <div className="input-group my-4 input-group-lg w-50 mx-auto">
    <div className="input-group-prepend">
      <span className="input-group-text">{label}</span>
    </div>
    <input
      placeholder={placeholder}
      type={type}
      className="form-control"
      {...register}
    />
  </div>
);

export default Input;

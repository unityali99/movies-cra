const Input = ({ label, placeholder, type, register, children, ...params }) => (
  <div className="input-group my-4 input-group-lg w-50 mx-auto">
    {type !== "submit" && (
      <div className="input-group-prepend">
        <span className="input-group-text">{label}</span>
      </div>
    )}
    {children}
    <input
      placeholder={placeholder}
      type={type}
      className="form-control"
      {...register}
      {...params}
    />
  </div>
);

export default Input;

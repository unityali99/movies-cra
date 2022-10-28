const DropDownList = ({ options, register, label, ...params }) => {
  return (
    <div className="input-group input-group-lg w-50 mx-auto">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          {label}
        </label>
      </div>
      <select
        {...register}
        className="custom-select"
        id="inputGroupSelect01"
        {...params}
      >
        {options.map((value, index) => (
          <option key={index} value={value._id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;

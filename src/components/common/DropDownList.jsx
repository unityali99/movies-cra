const DropDownList = ({
  options,
  register,
  label,
  selectedgenre,
  ...params
}) => {
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
        <option selected={!selectedgenre} value={""}>
          {"Choose a genre"}
        </option>
        {options.map((value, index) => (
          <option
            selected={selectedgenre && value._id === selectedgenre._id}
            key={index}
            value={value._id}
          >
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;

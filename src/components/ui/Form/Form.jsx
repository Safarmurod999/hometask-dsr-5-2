const Form = ({ children, onSubmit, direction = "x", width }) => {
  return (
    <form
      className={`form flex ${direction == "y" ? "flex-col" : "flex-row"
        } w-${width}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
const FormRow = ({ children, direction = "x" }) => {
  return <div className={`form-row ${direction == "y" ? "flex-col" : "flex-row"}`}>{children}</div>;
};
const FormControl = ({
  type = "text",
  placeholder = "",
  label = null,
  required = false,
  onChange,
  value,
  defaultValue,
  width = "full",
  name
}) => {
  return (
    <div className={`form-control w-${width}`}>
      {label && <label className="form-label">{label}</label>}
      {
        defaultValue ?
          <input
            className="form-input"
            type={type}
            placeholder={placeholder}
            defaultValue={value || ""}
            onChange={onChange}
            required={required}
            name={name}
          /> : <input
            className="form-input"
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            required={required}
            name={name}

          />
      }
    </div>
  );
};


const FormSelect = ({
  placeholder,
  label,
  required,
  onChange,
  value,
  options,
  width,
  name
}) => {
  return (
    <div className={`form-control w-${width}`}>
      <label className="form-label">{label}</label>
      <select
        className="form-input form-select"
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const FormSwitch = ({ value, onChange, name }) => {
  return (
    <label className="form-switch">
      <input type="checkbox" checked={value} onChange={onChange} name={name} />
      <div className={`toggle ${value ? "checked" : ""}`}></div>
    </label>
  );
};

const FormBtn = ({ text, icon, onClick }) => {
  return (
    <button className="form-button" aria-label="form-button" type="submit" onClick={onClick}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
}

const FormTextarea = ({
  placeholder = "",
  label = null,
  required = false,
  onChange,
  value,
  defaultValue,
  width = "full",
  name,
  rows = 4
}) => {
  return (
    <div className={`form-control w-${width}`}>
      {label && <label className="form-label">{label}</label>}
      <textarea
        className="form-textarea"
        placeholder={placeholder}
        value={value || ""}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        name={name}
        rows={rows}
      />
    </div>
  );
};

const FormDate = ({
  label = null,
  required = false,
  onChange,
  value,
  defaultValue,
  width = "full",
  name,
  minDate,
  maxDate
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange({
        target: {
          name: e.target.name,
          value: e.target.value
        }
      });
    }
  };

  return (
    <div className={`form-control w-${width}`}>
      {label && <label className="form-label">{label}</label>}
      <input
        className="form-input"
        type="date"
        value={value || ""}
        defaultValue={defaultValue}
        onChange={handleChange}
        required={required}
        name={name}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};

export { Form, FormRow, FormControl, FormSelect, FormBtn, FormSwitch, FormTextarea,FormDate };

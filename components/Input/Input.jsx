const InputComponent = ({
  label,
  formik,
  name,
  type,
  className,
  placeholder = "",
}) => {
  return (
    <div className={className}>
      <label
        className="mb-2 flex flex-row text-sm text-secondary-color"
        htmlFor={name}
      >
        {label}
        {formik.touched[name] && formik.errors[name] ? (
          <div className="ml-2 flex-1 text-left text-xs text-rose-500">{formik.errors[name]}</div>
        ) : null}
      </label>
      <input
        dir="rtl"
        placeholder={placeholder}
        type={type || "text"}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-full rounded bg-primary-color p-2 text-left text-sm outline-none transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary-color"
      />
    </div>
  );
};

export default InputComponent;

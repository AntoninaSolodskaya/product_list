import React, { Fragment } from "react";

const CustomInput = ({
  input,
  name,
  label,
  type,
  icon,
  meta: { touched, error }
}) => (
  <Fragment>
    <input {...input} name={name} type={type} label={label} icon={icon} />
    {touched && error && <span className="red-text">{error}</span>}
  </Fragment>
);

export default CustomInput;
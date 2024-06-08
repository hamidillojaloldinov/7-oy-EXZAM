import React from "react";
function FormInput({ label, type, defaultValue, name, placeholder }) {
  return (
    <div className="form-control py-2">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default FormInput;

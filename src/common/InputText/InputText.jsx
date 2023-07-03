import React from "react";
import "./InputText.css";

export const InputText = ({
  type,
  design,
  placeholder,
  name,
  functionHandler,
  onBlurFunction,
}) => {
  return (
    <>
      <input
        type={type}
        className={design}
        placeholder={placeholder}
        name={name}
        onChange={(e) => functionHandler(e)}
        onBlur={(e) => onBlurFunction(e)}
      />
    </>
  );
};

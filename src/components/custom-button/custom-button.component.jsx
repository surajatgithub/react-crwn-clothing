import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherParams }) => {
  return (
    <button className="custom-button" {...otherParams}>
      {children}
    </button>
  );
};

export default CustomButton;

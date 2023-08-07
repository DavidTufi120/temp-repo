import "./styles.css";
import React from "react";
import Props from "prop-types";

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Props.string.isRequired,
  onClick: Props.func.isRequired,
  disabled: Props.bool,
};

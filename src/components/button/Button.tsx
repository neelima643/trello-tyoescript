import React from "react";

type ButtonProps = {
  buttonclass?: string;
  label?: string;
  icon?: JSX.Element;
  onclick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  buttonclass,
  label,
  icon,
  onclick,
}) => {
  return (
    <button className={buttonclass} onClick={onclick}>
      {icon}
      {label}
    </button>
  );
};

export default Button;

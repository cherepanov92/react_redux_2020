import React from 'react';
import './style.css';

const Button = ({ children, mode }) => {
  let modeClassName = mode ? `Button--${mode}` : "";
  
  return <button className={`Button ${modeClassName}`}>{children}</button>;
}

export default Button;
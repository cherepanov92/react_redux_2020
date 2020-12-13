import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ children, mode, size }) => {
  let modeClassName = mode ? `Button--${mode}` : "";
  let sizeClassName = size ? `Button--${size}` : "";
  
  return <button className={`Button ${modeClassName} ${sizeClassName}`}>{children}</button>;
}

Button.defaultProps = {
  mode: 'primary',
  size: 'normal',
}

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'extra']),
}

export default Button;
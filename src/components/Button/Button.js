import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Button = ({ children, mode, size }) => {
  const className = classnames(
    'Button',
    {
      [`Button--${mode}`] : Boolean(mode),
      [`Button--${size}`] : Boolean(size),
    }
  )
  
  return <button className={className}>{children}</button>;
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
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Button = ({ children, mode, size, counter, ...props }) => {
  const className = classnames(
    'Button',
    {
      [`Button--${mode}`] : Boolean(mode),
      [`Button--${size}`] : Boolean(size),
    }
  )
  
  return  (
    <button className={className} {...props}>
      {children}
      {typeof counter === 'number' && <span className='Button__counter'>{counter}</span>}
    </button>
  );
}

Button.defaultProps = {
  mode: 'primary',
  size: 'normal',
  counter: null,
}

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'extra']),
  counter: PropTypes.number,
}

export default Button;
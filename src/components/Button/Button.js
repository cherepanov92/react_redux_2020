import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Button = ({ children, mode, size, counter, className, ...props }) => {
  const classNames = classnames(
    'Button',
    {
      [`Button--${mode}`] : Boolean(mode),
      [`Button--${size}`] : Boolean(size),
    },
    className
  )
  
  return  (
    <button className={classNames} {...props}>
      {children}
      {typeof counter === 'number' && <span className='Button__counter'>{counter}</span>}
    </button>
  );
}

Button.defaultProps = {
  mode: 'primary',
  size: 'normal',
  counter: null,
  className: null,
}

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'extra']),
  counter: PropTypes.number,
  className: PropTypes.string,
}

export default Button;
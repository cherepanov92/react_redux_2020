import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

const ButtonsGroup = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState(1)

  return (
    <div className="ButtonsGroup">
      {React.Children.map(children, (child, i) => (
        React.cloneElement(
          child,
          { 
            className: cn('ButtonsGroup__item', {'ButtonsGroup__item_active': i === activeBtn}),
            onClick: () => {setActiveBtn(i)}
          }
        )
      ))}
    </div>
  );
}

ButtonsGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, 
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
}

export default ButtonsGroup;
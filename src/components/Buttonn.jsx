import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";
function Buttonn({
  size,
  color,
  disable,
  onClick,
  innerText,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <button
      className={`btn btn-${color} btn-${size}`}
      disabled={disable}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {innerText}
    </button>
  );
}

Button.defaultProps={
    size:'small',
    color:'',
    disable:false,
    innerText:'default'
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Buttonn;

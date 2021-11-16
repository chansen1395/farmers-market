import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>
        <li>{props.selection}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string
};

export default Produce;
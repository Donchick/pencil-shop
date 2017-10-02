import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = (props) => { 
  return <div>
    <label>{props.title}</label>
    { props.errors ?
     <p className="error-message">{props.errors}</p>
      : ''
    }
    <div>
      {props.options.map(opt => {
        return (
          <label className="checkbox-inline" key={opt.value}>
            <input
              name={props.groupName}
              onChange={props.controlFunc}
              value={opt.value}
              type="checkbox" 
            />
          {opt.title}
          </label>
        );
      })}
    </div>
  </div>
};

CheckboxGroup.propTypes = {  
  title: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc: PropTypes.func.isRequired
};

export default CheckboxGroup;  
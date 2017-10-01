import React, { Component } from 'react';

const CheckboxGroup = (props) => ( 
  <div>
    <label>{props.title}</label>
    <div>
      {props.options.map(opt => {
        return (
            <label key={opt.value}>
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
);

CheckboxGroup.propTypes = {  
  title: React.PropTypes.string.isRequired,
  groupName: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOptions: React.PropTypes.array,
  controlFunc: React.PropTypes.func.isRequired
};

export default CheckboxGroup;  
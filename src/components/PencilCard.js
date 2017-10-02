import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PencilsList = (props) => {
  return <div className="col-xs-4">
    <div className="pencil-card thumbnail">
      <Link to={`/pencil/details/${props.pencil.PencilId}`} className="pencil-link">
        <img src={props.pencil.Image} className="pencil-image" alt="pencil"/>
        <p className="pencil-name caption text-capitalize" onClick="">{props.pencil.Name}</p>
      </Link>
      <p className="pencil-price">$ {props.pencil.Price}</p>
    </div>
  </div>
}

export default PencilsList;
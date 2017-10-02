import React from 'react';
import { Link } from 'react-router-dom';

const PencilsList = (props) => {
  let { PencilId, Image, Name, Price } = props.pencil;

  return <div className="col-xs-4">
    <div className="pencil-card thumbnail">
      <Link to={`/pencil/details/${PencilId}`} className="pencil-link">
        <img src={Image} className="pencil-image" alt="pencil"/>
        <p className="pencil-name caption text-capitalize" onClick="">{Name}</p>
      </Link>
      <p className="pencil-price">$ {Price}</p>
    </div>
  </div>
}

export default PencilsList;
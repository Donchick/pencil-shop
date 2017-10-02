import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PencilDetails extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      name: props.pencil ? props.pencil.Name : '',
      description: props.pencil ? props.pencil.Description : '',
      image: props.pencil ? props.pencil.Image : null,
      price: props.pencil ? props.pencil.Price : ''
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      name: nextProps.pencil.Name,
      description: nextProps.pencil.Description,
      image: nextProps.pencil.Image,
      price: nextProps.pencil.Price
    });
  }

  render () {
    let { image, name, description, price} = this.state;

    return <div className="pencil-details-container">
      <img src={image} className="col-xs-6 pencil-image" alt="pencil"/>
      <div className="col-xs-6">
        <p className="name">{name}</p>
        <p>{description}</p>
      </div>
      <p className="price">$ {price}</p>
    </div>
  }
}

PencilDetails.propTypes = {  
  Image: PropTypes.string,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Price: PropTypes.number
};

export default PencilDetails;  
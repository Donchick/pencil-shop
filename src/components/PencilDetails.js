import React, { Component } from 'react';

class PencilDetails extends Component {
  state = {
    name: this.props.pencil ? this.props.pencil.Name : '',
    description: this.props.pencil ? this.props.pencil.Description : '',
    image: this.props.pencil ? this.props.pencil.Image : null,
    price: this.props.pencil ? this.props.pencil.Price : ''
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
    return <div className="container pencil-details-container">
      <img src={this.state.image} className="col-xs-6 pencil-image"/>
      <div className="col-xs-6">
        <p className="name">{this.state.name}</p>
        <p>{this.state.description}</p>
      </div>
      <p className="price">$ {this.state.price}</p>
    </div>
  }
}

export default PencilDetails;  
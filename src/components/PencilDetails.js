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
    return <div>
      <img src={this.state.image} />
      <p>{this.state.name}</p>
      <p>{this.state.description}</p>
      <p>$ {this.state.price}</p>
    </div>
  }
}

export default PencilDetails;  
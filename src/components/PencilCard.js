import React, { Component } from 'react';

class PencilsList extends Component {
  render() {
    return <div className="pencil-card">
      <img src={this.props.pencil.Image} className="pencil-image"/>
      <p className="pencil-name">{this.props.pencil.Name}</p>
      <p className="pencil-price">{this.props.pencil.Price}</p>
    </div>
  }
}

export default PencilsList;
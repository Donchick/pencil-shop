import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PencilsList extends Component {
  render() {
    return <div className="pencil-card">
      <Link to={`/pencil/details/${this.props.pencil.PencilId}`}>
        <img src={this.props.pencil.Image} className="pencil-image"/>
        <p className="pencil-name" onClick="">{this.props.pencil.Name}</p>
      </Link>
      <p className="pencil-price">$ {this.props.pencil.Price}</p>
    </div>
  }
}

export default PencilsList;
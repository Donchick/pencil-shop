import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PencilsList extends Component {
  render() {
    return <div className="col-xs-4">
      <div className="pencil-card thumbnail">
        <Link to={`/pencil/details/${this.props.pencil.PencilId}`} className="pencil-link">
          <img src={this.props.pencil.Image} className="pencil-image"/>
          <p className="pencil-name caption text-capitalize" onClick="">{this.props.pencil.Name}</p>
        </Link>
        <p className="pencil-price">$ {this.props.pencil.Price}</p>
      </div>
    </div>
  }
}

export default PencilsList;
import React, { Component } from 'react';
import { getPencil } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PencilDeltails from '../components/PencilDetails';

const mapStateToProps = (state, props) => ({
  pencil: state.pencils.find(pencil => {
    if (pencil.PencilId * 1 === props.match.params._id * 1) {
      return pencil;
    }
    
    return undefined;
  })
})
    

class PencilDetailsPage extends Component {
  componentDidMount() {
    this.props.getPencil(this.props.match.params._id)
  }

  render() {
    return (
      <div>
        <ol className="container breadcrumb page-top-element">
          <li><Link to="/">Back</Link></li>
        </ol>
        <PencilDeltails
            pencil={this.props.pencil}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  { getPencil }
)(PencilDetailsPage);

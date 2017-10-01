import React, { Component } from 'react';
import { getAllBuyers } from '../actions/buyers';
import { getPencil, addPencil, updatePencil } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PencilForm from '../components/PencilForm';

const mapStateToProps = (state, props) => {
  if (props.match.params._id) {
    return {
      pencil: state.pencils.find(pencil => pencil.PencilId == props.match.params._id)
    }
  } else {
    return {
      buyers: state.buyers,
      pencil: null
    }
  }
};

class PencilFormPage extends Component {
  state = {
    pencilSaved: false
  }

  componentDidMount() {
    if (this.props.match.params._id) {
      this.props.getPencil(this.props.match.params._id)
    } else {
      this.props.getAllBuyers()
    }
  }

  savePencil = (pencil) => {
    let data = {
      Name: pencil.name,
      Description: pencil.description,
      Price: pencil.price,
      Image: pencil.image,
      BuyersIds: pencil.selectedBuyers
    };
    if (pencil.id) {
      data.PencilId = pencil.id;
    }

    let saveFunc = pencil.id ? this.props.updatePencil : this.props.addPencil;

    saveFunc(data)
      .then(() => {this.setState({ pencilSaved: true })});
  }

  render() {
    return (
      <div>
        {
          this.state.pencilSaved ?
          <Redirect to="/" /> :
          <PencilForm 
            pencil={this.props.pencil}
            buyers={this.props.buyers}
            savePencil={this.savePencil}
          />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  { getAllBuyers, getPencil, addPencil, updatePencil }
)(PencilFormPage);
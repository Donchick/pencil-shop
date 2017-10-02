import React, { Component } from 'react';
import { getAllBuyers } from '../actions/buyers';
import { getPencil, addPencil, updatePencil, deletePencil } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PencilForm from '../components/PencilForm';
import Modal from '../containers/Modal';

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
    pencilUpdated: false
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
      .then(() => {this.setState({ pencilUpdated: true })});
  }

  deletePencil = (id) => {
    return this.modal.open(<p>Are you sure you want to delete the pencil?</p>)
      .then(() => {
        return this.props.deletePencil(id)
          .then(() => {this.setState({ pencilUpdated: true })});
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        {
          this.state.pencilUpdated ?
          <Redirect to="/" /> :
          <PencilForm 
            pencil={this.props.pencil}
            buyers={this.props.buyers}
            savePencil={this.savePencil}
            deletePencil={this.deletePencil}
          />
        }
        <Modal
          title="Delete pencil"
          ref={(modal) => { this.modal = modal; }}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  { getAllBuyers, getPencil, addPencil, updatePencil, deletePencil }
)(PencilFormPage);

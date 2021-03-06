import React, { Component } from 'react';
import { getAllBuyers } from '../actions/buyers';
import { getPencil, addPencil, updatePencil, deletePencil } from '../actions/pencils';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PencilForm from '../components/PencilForm';
import Modal from '../containers/Modal';

const mapStateToProps = (state, props) => {
  if (props.match.params._id) {
    return {
      pencil: state.pencils.find(pencil => pencil.PencilId * 1 === props.match.params._id * 1)
    }
  } else {
    return {
      buyers: state.buyers,
      pencil: null
    }
  }
};

class PencilFormPage extends Component {
  constructor (props) {
    super(...arguments);
    this.state = {
      pencilUpdated: false
    }
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
    let { pencil, buyers } = this.props; 

    return (
      <div>
        {
          this.state.pencilUpdated ?
          <Redirect to="/" /> :
          <PencilForm 
            pencil={pencil}
            buyers={buyers}
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

import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup';

class PencilForm extends Component {
  constructor (props) {
    super(...arguments);
    this.state = {
      id: props.pencil ? props.pencil.PencilId : null,
      name: props.pencil ? props.pencil.Name : '',
      description: props.pencil ? props.pencil.Description : '',
      image: props.pencil ? props.pencil.Image : null,
      price: props.pencil ? props.pencil.Price : '',
      selectedBuyers: props.pencil && props.pencil.PencilId ? props.pencil.BuyersIds : [],
      errors: {}
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.pencil) {
        this.setState({
          id: nextProps.pencil.PencilId,
          name: nextProps.pencil.Name,
          description: nextProps.pencil.Description,
          image: nextProps.pencil.Image,
          price: nextProps.pencil.Price,
          selectedBuyers: nextProps.pencil.BuyersIds
        });
    } else if (nextProps.buyers) {
        this.setState({
            buyers: nextProps.buyers
        });
    }
  }

  validateForm () {
    let orgiginalErrorMsg = "Can't be empty!";

    let errors = {};
    if (!this.state.name) {
      errors.name = orgiginalErrorMsg;
    }
    if (!this.state.description) {
      errors.description = orgiginalErrorMsg;
    }
    if (!this.state.price) {
      errors.price = orgiginalErrorMsg;
    }
    if (!this.state.image) {
      errors.image = "You should to load image!";
    }
    if (this.state.selectedBuyers.length === 0) {
      errors.selectedBuyers = "You should to choose one to many buyers!";
    }

    this.setState({errors});

    return Object.keys(errors).length === 0;
  }

  clearErrors (filedName) {
    let errors = Object.assign({}, this.state.errors);
    delete errors[filedName];
    return errors;
  }

  changeHandler = (e) => {
    let errors = this.clearErrors(e.target.name);
    this.setState({ [e.target.name]: e.target.value, errors });
  }

  submitHandler = (e) => {
    e.preventDefault();

    let isFormValid = this.validateForm();

    if (isFormValid) {
      const { id, name, selectedBuyers, description, price, image} = this.state;

      this.props.savePencil({ id, name, selectedBuyers, description, price, image });
    }
  }

  deleteClickHandler = (e) => {
    e.preventDefault();

    this.props.deletePencil(this.state.id);
  }

  buyersChangeHandler = (e) => {
    let errors = this.clearErrors('selectedBuyers');
    const newSelection = e.target.value;
    let newSelectionArray;
  
    if(this.state.selectedBuyers.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedBuyers.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedBuyers, newSelection];
    }
  
    this.setState({ selectedBuyers: newSelectionArray, errors });
  }

  imageChangeHandler (e) {
    let errors = this.clearErrors('image');
    let file = e.target.files[0];
    let fr = new FileReader();
    fr.onload = (() => {
        return (e) => {
            let data = e.target.result;
            this.setState({
              image: data,
              errors
            });
        }
    })();

    fr.readAsDataURL(file);
  }

  render() {
    const form = (
      <form onSubmit={this.submitHandler} className="row">
        <div className="col-xs-6">
          <div className={`input-field ${!!this.state.errors.name ? 'has-error': ''}`}>
            <label htmlFor="name">Name</label>
            { this.state.errors.name ?
              <p className="error-message">{this.state.errors.name}</p>
              : ''
             }
            <input
              name="name"
              value={this.state.name}
              onChange={this.changeHandler.bind(this)}
              id="name"
              className="form-control"
            />
          </div>

          <div className={`input-field ${!!this.state.errors.description ? 'has-error' : ''}`}>
            <label htmlFor="description">Description</label>
            { this.state.errors.description ?
              <p className="error-message">{this.state.errors.description}</p>
              : ''
            }
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.changeHandler.bind(this)}
              id="description"
              className="form-control description"
            />
          </div>
          {this.state.buyers && this.state.buyers.length > 0 &&
            <div className={`input-field ${!!this.state.errors.selectedBuyers ? 'has-error' : ''}`}>
              <CheckboxGroup 
                title="Pencils' buyers"
                options={this.state.buyers.map(buyer => ({value: buyer.BuyerId, title: buyer.Name}))}
                controlFunc={this.buyersChangeHandler.bind(this)}
                groupName="selectedBuyers"
                checkboxClass="form-control"
                errors={this.state.errors.selectedBuyers}
              />
            </div>
          }
        </div>

        <div className="col-xs-6">
          <div className={`input-field row ${!!this.state.errors.image ? 'has-error' : ''}`}>
            { this.state.errors.image ?
              <p className="error-message">{this.state.errors.image}</p>
              : ''
            }
            <label htmlFor="pencilImage" className="btn btn-default btn-file text-capitalize">
                {this.state.image ? 'Change pencil image' : 'Add pencil image'} <input type="file" id="pencilImage" className="pencil-image-input" onChange={this.imageChangeHandler.bind(this)}/>
            </label>
            <img src={this.state.image} className="pencil-image-preview col-xs-12" alt="pencil"/>
          </div>

          <div className={`input-field ${!!this.state.errors.price ? 'has-error' : ''}`}>
            <label htmlFor="price">Price ($)</label>
            { this.state.errors.price ?
              <p className="error-message">{this.state.errors.price}</p>
              : ''
            }
            <input
              name="price"
              value={this.state.price}
              onChange={this.changeHandler.bind(this)}
              id="price"
              className="form-control"
            />
          </div>
        </div>

        <button className="save-btn btn btn-primary btn-lg">Save</button>

        {this.state.id &&
          <button className="delete-btn btn btn-danger btn-lg" onClick={this.deleteClickHandler.bind(this)}>Delete</button>
        }
      </form>
    );
    return (
      <div className="container">
        <p className="page-top-element text-capitalize">{this.state.id ? 'Edit pencil' : 'Add new pencil'}</p>
        <div className="pencil-form">
          { form }
        </div>
      </div>
    );
  }
}


export default PencilForm;

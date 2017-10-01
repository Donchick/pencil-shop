import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup';

class PencilForm extends Component {
  state = {
    id: this.props.pencil ? this.props.pencil.PencilId : null,
    name: this.props.pencil ? this.props.pencil.Name : '',
    description: this.props.pencil ? this.props.pencil.Description : '',
    image: this.props.pencil ? this.props.pencil.Image : null,
    price: this.props.pencil ? this.props.pencil.Price : '',
    selectedBuyers: this.props.pencil && this.props.pencil.PencilId ? this.props.pencil.BuyersIds : [],
    errors: {},
    loading: false
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
    let errors = {};
    if (!this.state.name) {
      errors.name = "Can't be empty";
    }
    if (!this.state.description) {
      errors.description = "Can't be empty";
    }
    if (!this.state.price) {
      errors.price = "Can't be empty";
    }
    if (!this.state.image) {
      errors.image = "You should to load image";
    }
    if (this.state.selectedBuyers.length === 0) {
      errors.selectedBuyers = "You should to choose one to many buyers";
    }

    this.setState({errors});

    return Object.keys(errors).length === 0;
  }

  clearErrors (filedName) {
    let errors = Object.assign({}, this.state.errors);
    delete errors[filedName];
    return errors;
  }

  handleChange = (e) => {
    let errors = this.clearErrors(e.target.name);
    this.setState({ [e.target.name]: e.target.value, errors });
  }

  handleSubmit = (e) => {
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

  handleBuyersChange = (e) => {
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
      <form onSubmit={this.handleSubmit}>
        <h1>Add new game</h1>

        <div className={`input-field ${!!this.state.errors.name ? 'error': ''}`}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            id="name"
          />
        </div>

        <div className={`input-field ${!!this.state.errors.description ? 'error' : ''}`}>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            id="description"
          />
        </div>

        <div className={`input-field ${!!this.state.errors.price ? 'error' : ''}`}>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChange.bind(this)}
            id="[price]"
          />
        </div>

        <div className={`input-field ${!!this.state.errors.image ? 'error' : ''}`}>
          <label htmlFor="pencilImage">Choose pencil image:</label>
          <input type="file" id="pencilImage" className="avatar" onChange={this.imageChangeHandler.bind(this)}/>
          <div className="file-styled-label">
            <img src={this.state.image} className="avatar-img"/>
          </div>
        </div>

        {this.state.buyers && this.state.buyers.length > 0 &&
          <div className={`input-field ${!!this.state.errors.selectedBuyers ? 'error' : ''}`}>
            <CheckboxGroup 
              title="Pencils' buyers"
              options={this.state.buyers.map(buyer => ({value: buyer.BuyerId, title: buyer.Name}))}
              controlFunc={this.handleBuyersChange.bind(this)}
              groupName="selectedBuyers"
            />
          </div>
        }
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
    return (
      <div>
        { form }

        {this.state.id &&
          <button className="ui primary button" onClick={this.deleteClickHandler.bind(this)}>Delete</button>
        }
      </div>
    );
  }
}


export default PencilForm;

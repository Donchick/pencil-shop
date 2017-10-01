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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, name, selectedBuyers, description, price, image} = this.state;

    this.props.savePencil({ id, name, selectedBuyers, description, price, image });
    /*
    // validation
    let errors = {};
    if (this.state.title === '') errors.title = "Can't be empty";
    if (this.state.cover === '') errors.cover = "Can't be empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const { _id, title, cover } = this.state;
      this.setState({ loading: true });
      this.props.saveGame({ _id, title, cover })
        .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
    }
    */
  }

  deleteClickHandler = (e) => {
    e.preventDefault();

    this.props.deletePencil(this.state.id);
  }

  handleBuyersChange = (e) => {
    const newSelection = e.target.value;
    let newSelectionArray;
  
    if(this.state.selectedBuyers.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedBuyers.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedBuyers, newSelection];
    }
  
    this.setState({ selectedBuyers: newSelectionArray });
  }

  imageChangeHandler (e) {
    let file = e.target.files[0];
    let fr = new FileReader();
    fr.onload = (() => {
        return (e) => {
            let data = e.target.result;
            this.setState({
              image: data
            });
        }
    })();

    fr.readAsDataURL(file);
  }

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <h1>Add new game</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            id="name"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            id="description"
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChange.bind(this)}
            id="[price]"
          />
        </div>

        
        <label htmlFor="pencilImage">Choose pencil image:</label>
        <input type="file" id="pencilImage" className="avatar" onChange={this.imageChangeHandler.bind(this)}/>
        <div className="file-styled-label">
          <img src={this.state.image} className="avatar-img"/>
        </div>

        {this.state.buyers && this.state.buyers.length > 0 &&
          <CheckboxGroup 
            title="Pencils' buyers"
            options={this.state.buyers.map(buyer => ({value: buyer.BuyerId, title: buyer.Name}))}
            controlFunc={this.handleBuyersChange.bind(this)}
            groupName="selectedBuyers"
          />
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

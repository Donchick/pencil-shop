import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navigation} from 'react-router';
import {withRouter} from "react-router-dom";

class App extends Component {
    constructor () {
        super(...arguments);

        this.selectedPencilId = '';
    }

    componentWillReceiveProps = (nextProps) => {
        if (Array.isArray(nextProps.pencils) && nextProps.pencils.length > 0 && !this.selectedPencilId) {
            this.selectedPencilId = nextProps.pencils[0].PencilId;
        }
    }

    handleSelectedPencil (e) {
        this.selectedPencilId = e.target.value * 1;
    }

    editPencilLinkHandler (e) {
        e.preventDefault();
        this.props.history.push(`/pencil/${this.selectedPencilId}`);
    }

    render () {
        return <div className={`menu ${this.props.classList || ''}`}>
            <Link to="/pencils/new" className="menu-element text-capitalize">Add New Pencil</Link>
            <div className="edit-pencil-form">
                <select
                    name="selectList"
                    className="menu-element text-capitalize"
                    onChange={this.handleSelectedPencil.bind(this)}>
                    {this.props.pencils.map(pencil => {
                        return (
                        <option
                            key={pencil.PencilId}
                            value={pencil.PencilId}>{pencil.Name}</option>
                        );
                    })}
                </select>
                <a href="#" onClick={this.editPencilLinkHandler.bind(this)} className="menu-element text-capitalize">Edit Pencil</a>
            </div>
        </div>
    }
}

export default withRouter(App);
import React, { Component } from 'react';
import PencilsList from '../components/PencilsList';
import PencilFormManager from '../components/PencilFormManager';
import { getAllPencils } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pencils: state.pencils
});

class Home extends Component {
    componentDidMount() {
        this.props.getAllPencils();
    }

    render () {
       return <div className="container">
            <div className="pencil-form-manager row">
                <PencilFormManager pencils={this.props.pencils} classList="page-top-element"/>
            </div>
            <div className="pencils-list row">
                <PencilsList pencils={this.props.pencils}/>
            </div>
        </div>
    }
}

Home.propTypes = {
    pencils: React.PropTypes.array.isRequired,
    getAllPencils: React.PropTypes.func.isRequired
}

export default connect(
    mapStateToProps, 
    { getAllPencils }
)(Home);
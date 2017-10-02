import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PencilsList from '../components/PencilsList';
import PencilManagerMenu from '../components/PencilManagerMenu';
import { getAllPencils } from '../actions/pencils';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    pencils: state.pencils
});

class Home extends Component {
    constructor (props) {
        super(...arguments);
        this.state = {
            pencils: props.pencils || []
        };
    }

    componentDidMount() {
        this.props.getAllPencils();
    }

    componentWillReceiveProps(nextState) {
        if (nextState.pencils) {
            this.setState({pencils: nextState.pencils});
        }
    }

    render () {
       return <div>
            <div className="pencil-form-manager row">
                <PencilManagerMenu pencils={this.state.pencils} classList="page-top-element"/>
            </div>
            <div className="pencils-list row">
                <PencilsList pencils={this.state.pencils}/>
            </div>
        </div>
    }
}

Home.propTypes = {
    pencils: PropTypes.array.isRequired,
    getAllPencils: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps, 
    { getAllPencils }
)(Home);
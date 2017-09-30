import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import PencilCard from './PencilCard';

class PencilsList extends Component {
    render() {
        return <ul>
            {this.props.pencils.map(pencil =>
                <PencilCard pencil={pencil} key={pencil.PencilId} />
            )}
        </ul>
    }
}

export default PencilsList
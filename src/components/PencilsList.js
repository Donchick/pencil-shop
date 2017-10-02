import React, { Component } from 'react';
import PencilCard from './PencilCard';

class PencilsList extends Component {
    render() {
        return <div className="row">
            {this.props.pencils.map(pencil =>
                <PencilCard pencil={pencil} key={pencil.PencilId} />
            )}
        </div>
    }
}

export default PencilsList
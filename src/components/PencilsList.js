import React, { Component } from 'react';
import PencilCard from './PencilCard';

const PencilsList = (props) => {
    return <div className="row">
        {props.pencils.map(pencil =>
            <PencilCard pencil={pencil} key={pencil.PencilId} />
        )}
    </div>
}

export default PencilsList
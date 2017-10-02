import React from 'react';
import PropTypes from 'prop-types';
import PencilCard from './PencilCard';

const PencilsList = (props) => {
    return <div className="row">
        {props.pencils.length > 0 ? props.pencils.map(pencil =>
            <PencilCard pencil={pencil} key={pencil.PencilId} />
        ) : ''}
    </div>
}

PencilsList.propTypes = {  
    pencils: PropTypes.array.isRequired
};

export default PencilsList
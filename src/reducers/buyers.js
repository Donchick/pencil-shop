import { BUYERS_RECEIVED } from '../constants/actions';

const buyers = (state = [], action) => {
    switch (action.type) {
        case BUYERS_RECEIVED:
            return action.buyers;

        default:
            return state
    }
};

export default buyers;
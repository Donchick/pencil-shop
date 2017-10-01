const buyers = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_BUYERS':
            return action.buyers;

        default:
            return state
    }
};

export default buyers;
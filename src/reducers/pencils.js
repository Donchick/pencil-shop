const pencils = (state = [], action) => {
    switch (action.type) {
        case 'PENCIL_ADDED':
            return [
                ...state,
                 action.pencil
            ]

        case 'RECEIVE_PENCILS':
            return action.pencils;

        default:
            return state
    }
};

export default pencils;
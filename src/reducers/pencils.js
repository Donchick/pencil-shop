const pencils = (state = [], action) => {
    switch (action.type) {
        case 'PENCIL_ADDED':
            return [
                ...state,
                 action.pencil
            ]

        case 'RECEIVE_PENCILS':
            return action.pencils;

        case 'RECEIVE_PENCIL':
            if (state.find(pencil => pencil.PencilId === action.pencil.PencilId)) {
                return state.map(pencil => 
                    pencil.PencilId === action.pencil.PencilId ? action.pencil : pencil);
            } else {
                return [
                    ...state,
                    action.pencil
                ]
            }

        default:
            return state
    }
};

export default pencils;
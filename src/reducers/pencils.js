const pencils = (state = [], action) => {
    switch (action.type) {
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

        case 'PENCIL_DELETED':
            return state.filter(pencil => pencil.PencilId !== action.pencil.PencilId)

        default:
            return state
    }
};

export default pencils;
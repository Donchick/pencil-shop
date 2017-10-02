import { PENCIL_DELETED, PENCIL_RECEIVED, PENCILS_RECEIVED} from '../constants/actions';

const pencils = (state = [], action) => {
    switch (action.type) {
        case PENCILS_RECEIVED:
            return action.pencils;

        case PENCIL_RECEIVED:
            if (state.find(pencil => pencil.PencilId === action.pencil.PencilId)) {
                return state.map(pencil => 
                    pencil.PencilId === action.pencil.PencilId ? action.pencil : pencil);
            } else {
                return [
                    ...state,
                    action.pencil
                ]
            }

        case PENCIL_DELETED:
            return state.filter(pencil => pencil.PencilId !== action.pencil.PencilId)

        default:
            return state
    }
};

export default pencils;
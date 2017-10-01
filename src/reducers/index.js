import { combineReducers } from 'redux';
import pencils from './pencils';
import buyers from './buyers';

const pencilStoreApp = combineReducers({
    pencils,
    buyers
});

export default pencilStoreApp;
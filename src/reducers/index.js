import { combineReducers } from 'redux';
import pencils from './pencils';
import users from './users';

const pencilStoreApp = combineReducers({
    pencils,
    users
});

export default pencilStoreApp;
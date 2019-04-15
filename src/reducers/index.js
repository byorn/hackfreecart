import {combineReducers} from 'redux';
import products from './products';
import credentials from './credentials';
import displayMessage from './displayMessage';
import categories from './categories';

/** store state is built from here */
const rootReducer = combineReducers({products,credentials,displayMessage,categories});

export default rootReducer;

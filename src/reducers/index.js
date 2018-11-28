import {combineReducers} from 'redux';
import products from './products';
import inventory from './inventory';
import cart from './cart';
import credentials from './credentials';
import displayMessage from './displayMessage';
import categories from './categories';

const rootReducer = combineReducers({products,inventory,cart,credentials,displayMessage,categories});

export default rootReducer;

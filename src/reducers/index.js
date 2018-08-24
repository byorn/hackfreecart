import {combineReducers} from 'redux';
import products from './products';
import inventory from './inventory';
import cart from './cart';
import credentials from './credentials';
import displayMessage from './displayMessage';

const rootReducer = combineReducers({products,inventory,cart,credentials,displayMessage});

export default rootReducer;

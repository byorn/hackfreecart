import {combineReducers} from 'redux';
import products from './products';
import inventory from './inventory';
import cart from './cart';
import credentials from './credentials';

const rootReducer = combineReducers({products,inventory,cart,credentials});

export default rootReducer;

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from '../reducers/index';

export const teststore = (defaultState = {}) => {

  //create an onject for the default data
// const defaultState= {
//   credentials:{'isLoggedIn':false},
//   products: [],
//   inventory:[],
//   cart:{cartTotal:0,cartItems:[]}
// }

    return createStore(rootReducer,defaultState, applyMiddleware(thunk));
}






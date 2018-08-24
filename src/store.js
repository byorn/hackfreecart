import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from './reducers/index';

//create an onject for the default data
const defaultState= {
  credentials:{'isLoggedIn':false},
  products: [],
  inventory:[],
  cart:{cartTotal:0,cartItems:[]},
  displayMessage:{open:false,type:'',message:''}
}

const store =createStore(rootReducer,defaultState, applyMiddleware(thunk));


export default store;

import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from './reducers';

//create an onject for the default data
const defaultState= {
  credentials:{'isLoggedIn':false, 'user':{}},
  products: [],
  displayMessage:{open:false,type:'',message:''},
  categories: []
}

/** For Redux Dev Tools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(rootReducer,defaultState, composeEnhancers(applyMiddleware(thunk)));


export default store;

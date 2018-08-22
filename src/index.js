import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './root';
import {Provider} from 'react-redux';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import {loadProducts} from './actions/productActions';
//import {loadInventory} from './actions/inventoryActions';

//store.dispatch(loadProducts());
//store.dispatch(loadInventory());
const jsx = <Provider store={store}>
                <RootApp/>
            </Provider>

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
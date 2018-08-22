import React from 'react';
import { BrowserRouter as Router, Route ,Switch,NavLink } from 'react-router-dom'
import MainApp from './components/MainApp';
import Login from './components/Login';


const RootApp = () => (
              <div data-test="root-app">
              <Router>
             
                    <Switch>
                     <Route exact path="/" component={Login} />
                     <Route exact path="/app" component={MainApp} />
                    </Switch>
                
              </Router>
              </div>
            )


export default RootApp;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainApp from './components/MainApp';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import DisplayMessage from './components/DisplayMessage';
import Config from './util/Config';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const RootApp = () => (
              <div data-test="root-app">
              <ThemeProvider  theme={theme}>
              <Router basename={Config.getBaseURL()}>
             
                    <Switch>
                     <Route exact path="/" component={Login} />
                     <Route exact path="/createAccount" component={CreateAccount} />
                     <Route exact path="/app" component={MainApp} />
                     <Route path="/*" component={MainApp} />
                   
                    </Switch>
                
              </Router>
              <DisplayMessage/>
              </ThemeProvider >
              </div>
            )


export default RootApp;

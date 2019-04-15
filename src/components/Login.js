import React, {Component} from 'react'
import { Redirect,Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/loginActions';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    width_100: {
      width:'100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'18%',
      
        [theme.breakpoints.down('md')]: {
            width:'30%',
        },
        [theme.breakpoints.down('sm')]: {
            width:'40%',
        },
        [theme.breakpoints.down('xs')]: {
            width:'60%',
        },
      },
    
  });



class Login extends Component {

    state = {
        username:'',
        password:''
    }

    handleChange = name => event => {
          this.setState({
          [name]: event.target.value,
        });
    };

    componentDidMount() {
        const {checkLogin} = this.props;
        checkLogin();
    }
    
    render() {

        const {classes, appstate, login} = this.props;
     
        if(appstate.credentials.isLoggedIn){
            return   <Redirect to="/app"  data-test="logged-in"/>
        }else{
            return (  
             <Grid container>
                           <Grid item xs={12} ms={12} lg={12} container>
                            <AppBar position="static" color="primary">
                                            <Toolbar>
                                            <Typography variant="title" color="inherit">
                                                HackFreeCart.com
                                            </Typography>
                                            </Toolbar>
                            </AppBar>         
                            </Grid>

                                                  
                            <Grid item xs={12} ms={12} lg={12} container spacing={16} className="margin-top">
                                           
                                    <Grid container spacing={16} alignContent="center" justify="center" data-test="login-form">
                                 
                                    <Paper className={classes.paper} elevation={1}>
                                        <Typography variant="headline" component="h3">
                                         Login
                                        </Typography>
       
                                             <form style={{width:"100%"}}>       
                                             <Grid item xs={12}>
                                             <TextField
                                                id="username"
                                                label="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange('username')}
                                                margin="normal"
                                                className={classes.width_100}
                                                autoComplete="username"
                                            
                                                />
                                            </Grid>
                                                                                                                   
                                            <Grid item xs={12}>


                                               <TextField
                                                id="current-password"
                                                label="Password"
                                                type="password"
                                                value={this.state.password}
                                                autoComplete="current-password"
                                                onChange={this.handleChange('password')}
                                                margin="normal"
                                                className={classes.width_100}
                                                />
                                            </Grid>
                                            </form>

                                            <Grid item xs={12}>
                                            <Button variant="contained" onClick = {login.bind(null,this.state.username, this.state.password)} 
                                                            color="primary" className={classes.width_100}> Login </Button>
  
                                                   
                                            </Grid>
                                            <Grid item xs={12}>&nbsp;</Grid>
                                            <Grid item xs={12}>
                                                <Link to={`/forgotPassword`}>
                                                    <Typography variant="caption" gutterBottom align="left">
                                                        Forgot Password
                                                </Typography>
                                               </Link>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Link to={`/createAccount`}>
                                                    <Typography variant="caption" gutterBottom align="left">
                                                        Create Account
                                                </Typography>
                                               </Link>
                                            </Grid>
                                        </Paper>
                                      
                                    </Grid>
                                                
                            </Grid>  
                          
                    </Grid>

            )
            
                                    
            
        }
            

    }

}
  function mapStateToProps(state){
    return {
              appstate:state
           }
  }
  
  function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
  }
  
  export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Login));
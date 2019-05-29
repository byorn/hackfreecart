import React, {Component} from 'react'
import { Link,Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/createAccountActions';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Util from '../util/Util';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    width_100: {
      width:'100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
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



class CreateAccount extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            password:'',
            emailError:'',
            open: true,
        }
    
    }

    handleChange = name => event => {
          this.setState({
          [name]: event.target.value,
        });
    };

    handleClick = () => {
        this.setState({ open: true });
    };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
    };

    validateEmail = () => {
        if(!Util.validEmail(this.state.email)){
            this.setState({emailError:'Invalid email format'});
        }else{
            this.setState({emailError:''});
        }
        
    }

    save = () => {
        const {createAccount} = this.props;
        createAccount({ name:this.state.email, 
                        password:this.state.password,
                        email: this.state.email
                       });
    }

       
    render() {


        const {classes,appstate} = this.props;

        if(appstate.credentials.isLoggedIn){

            return   <Redirect to="/app"  data-test="logged-in"/>

        } else {

            return  <Grid container data-test="create-account-form">
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
                                           
                        <Grid container spacing={16} alignContent="center" justify="center">
                            <Paper className={classes.paper} elevation={1}>
                                    <Typography variant="h6" component="h3">
                                         Create Account
                                    </Typography>
              
                                    <Grid item xs={12}>
                                            
                                        <TextField
                                            id="id_email"
                                            label="Email"
                                            value={this.state.email}
                                            onChange={this.handleChange('email')}
                                            onBlur={this.validateEmail}
                                            margin="normal"
                                            className={classes.width_100} error={this.state.emailError?true:false}
                                            helperText={this.state.emailError}
                                        />
                                            
                                    </Grid>
                                                                                                                   
                                    <Grid item xs={12}>

                                            <TextField
                                                id="id_password"
                                                label="Password"
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                margin="normal"
                                                className={classes.width_100}
                                                />
                                     </Grid>

                                 
                                    <Grid item xs={12}>
                                            <Button variant="contained" 
                                                    onClick={this.save}
                                                    color="primary" 
                                                    className={classes.width_100}> 
                                                    Save 
                                            </Button>
                                                     
                                    </Grid>
                                    <Grid item xs={12}>
                                             &nbsp;
                                    </Grid>
                                    <Grid item xs={12}>
                                                <Link to={`/`}>
                                                    <Typography variant="h6" gutterBottom align="left">
                                                        Log in
                                                </Typography>
                                               </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                                <Link to={`/`}>
                                                    <Typography variant="caption" gutterBottom align="left">
                                                        Forgot Password
                                                </Typography>
                                               </Link>
                                    </Grid>
                                                                      
                            </Paper>
                                                
                         </Grid>  
                    </Grid>
        
                   
                </Grid>
     
        } 

    }

}
  function mapStateToProps(state){
    return {appstate:state};
  }
  
  function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
  }
  
  export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(CreateAccount));
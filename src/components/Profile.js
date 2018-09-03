import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/userActions';

class Profile extends Component{

    constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        password: ''
      }
    }

  
    componentDidMount(){
      const {credentials} = this.props;
   
      this.setState({ name:credentials.user.name, 
                      email:credentials.user.email,
                      password:''
                    });
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    save=()=>{
      const {updateUser} = this.props;
      const userObj = {email:this.state.email,name:this.state.name, password:this.state.password};
      const id = JSON.parse(localStorage.getItem('user'))._id;
     
      updateUser(userObj, id);
    };

    render(){

            
        return  <div>
        <Typography variant="headline" component="h3">
           Profile
        </Typography>
        <Typography component="p">
           Edit your profile
        </Typography>
        <Grid container>
        <Grid item xs={12} ms={6} lg={6}>
                    <Grid container>
                      <Grid item xs={12} ms={6} lg={6}>
                            <TextField
                              id="id-name"
                              label="Name"
                              placeholder="Name"
                              margin="normal"
                              value={this.state.name}
                              onChange={this.handleChange('name')}
                            />         
                      </Grid>

                       <Grid item xs={12} ms={6} lg={6}>
                            <TextField
                              id="id-role"
                              label="Role"
                              placeholder="Role"
                              defaultValue="Administrator"
                              margin="normal"
                              InputProps={{
                                readOnly: true,
                              }}
                            />         
                      </Grid>
                          
                   </Grid>
                    <Grid container>
                      <Grid item xs={12} ms={6} lg={6}>
                              <TextField
                                id="id-email"
                                label="Email"
                                placeholder="Email"
                                margin="normal"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                              />         
                        </Grid>
                        <Grid item xs={12} ms={6} lg={6}>
                            <TextField
                                id="id-password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />      
                        </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} ms={6} lg={6}>
                            <Button variant="contained" 
                                    onClick={this.save}
                                    color="primary" 
                                    > 
                                    Save 
                            </Button> 
                      </Grid>
                    </Grid>
         </Grid>
         <Grid item  xs={12} ms={6} lg={6}>
                           <img src="/imgs/Capture.PNG"/>   
          </Grid>
       
          </Grid>
      </div>
    }

}

function mapStateToProps(state){
  return {credentials:state.credentials};
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Profile);

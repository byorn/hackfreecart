import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/userActions';
import TraditionalFileUpload from './TraditionalFileUpload';
import Util from '../util/Util';



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
                      password:'',
                      pic:credentials.user.pic
                    });
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    onImageUpload = (fileId) => {
      const {updateProfilePic} = this.props;
      const obj = {pic:fileId};
      const id = Util.getUserId();
     
      updateProfilePic(obj, id);
      this.setState({ pic: fileId});
    }

    save=()=>{
      const {updateUser} = this.props;
      const userObj = {email:this.state.email,name:this.state.name, password:this.state.password};
      const id = Util.getUserId();
     
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
                       
                           <img alt="profile" width="100" height="100" src={Util.getImageUrl(this.state.pic)}/>  
                           {/* <input
        accept="image/*"
        
        id="contained-button-file"
        multiple
        type="file"
      /> 
                         <label htmlFor="contained-button-file">
                           <Button variant="contained" component="span"  color="default">
                             Upload
                              <CloudUploadIcon/>
                            </Button>
                            </label> */}
                            <TraditionalFileUpload onImageUpload={this.onImageUpload}/>
                         
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

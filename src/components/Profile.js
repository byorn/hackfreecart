import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class Profile extends Component{


    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    render(){
        return  <Paper  elevation={1}>
        <Typography variant="headline" component="h3">
           Profile
        </Typography>
        <Typography component="p">
           Edit your profile
        </Typography>
        <div>
        <TextField
          id="id-username"
          label="Username"
          placeholder="Username"
          margin="normal"
        />

        <TextField
          id="id-password"
          label="Password"
          placeholder="Password"
          margin="normal"
        />

        <TextField
          id="id-repassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          margin="normal"
        />

        <img src="/imgs/Capture.PNG"/>

        <br/>
    
         </div>   
      </Paper>
    }

}
export default Profile;
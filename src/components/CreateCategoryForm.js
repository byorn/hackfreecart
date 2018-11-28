import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HackRichTextEditor from './HackRichTextEditor';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import * as actionCreators from '../actions/categoryActions';
import Util from '../util/Util';
import TraditionalFileUpload from './TraditionalFileUpload';

const styles = {
  dialogPaper: {
      minHeight: '80vh',
      maxHeight: '80vh',
  },
};

class CreateCategoryForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          name: '',
          description: '',
          pic: ''
        }
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    handleRTEChange = val => {
      this.setState({
        description:val
      });
    }

    onImageUpload = image => {
      this.setState({pic: image});
    }
    createCategoryAndClearFields = () => {
        const {createCategory} = this.props;

        createCategory(this.state);

        this.setState({name:'',description:'', pic:''});
      
    }

    componentWillUpdate(){
      
      const appState = this.props.appstate;
     
      if(appState.displayMessage.open){
        
        //document.getElementById("cancelButton").click();
      }
    }
   
   
    render(){
          
       const {classes} = this.props;
        
        return <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle id="form-dialog-title">New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            fullWidth
          />
          <br/><br/>
          <InputLabel>Description</InputLabel>
          <HackRichTextEditor onChange={this.handleRTEChange} value={this.state.description}/>
          <br/><br/>
          <img width="100" height="100" src={Util.getImageUrl(this.state.pic)}/> 
          <TraditionalFileUpload onImageUpload={this.onImageUpload}/>
        </DialogContent>
        <DialogActions>
          <Button id="cancelButton" onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.createCategoryAndClearFields} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    }

}


function mapStateToProps(state){
  return {appstate:state};
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(CreateCategoryForm));
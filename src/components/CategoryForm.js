import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HackRichTextEditor from './HackRichTextEditor';
import TraditionalFileUpload from './TraditionalFileUpload';
import InputLabel from '@material-ui/core/InputLabel';
import Util from '../util/Util';
import TextField from '@material-ui/core/TextField';
class CategoryForm extends Component{

    constructor(props){
        super(props);
        this.state = {
          _id:'',
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

      updateCategory = () => {
          const categoryObj = this.state;
          
          this.props.onUpdateCategory(categoryObj);
      }
  
      onImageUpload = image => {
        this.setState({pic: image});
      }

      componentWillReceiveProps(props){
          const {_id,name,description, pic} = props.category;
          
          this.setState({_id:_id,name:name, description: description, pic: pic});
      }

    
    render(){
               
                return( <Grid container spacing={16}>
                            <Grid item xs={12} ms={12} lg={12}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        fullWidth
                                    />
                            </Grid> 
                            <Grid item xs={12} ms={12} lg={12} >
                                    <InputLabel>Description</InputLabel><br/>
                                     <HackRichTextEditor onChange={this.handleRTEChange} value={this.state.description}/>
                            </Grid>
                            <Grid item xs={12} ms={12} lg={12}>
                                <img width="100" height="100" src={Util.getImageUrl(this.state.pic)}/> 
                                <TraditionalFileUpload onImageUpload={this.onImageUpload}/>
                            </Grid>
                            <Grid item xs={12} ms={12} lg={12}>
                                <Button variant="contained" color="primary" onClick={this.updateCategory} >
                                    Save
                                </Button>
                                
                            </Grid>
                         </Grid>);


    }


}

  
export default CategoryForm;
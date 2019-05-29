import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CreateCategoryForm from './CreateCategoryForm';
import CategoryList from './CategoryList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/categoryActions';
import CategoryForm from './CategoryForm';
class Category extends Component{

    constructor(props){
        super(props);
        this.state={
            open: false,
            category:{_id:'',name:'', description:'',pic:''}
        }
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
 
    }

    componentDidMount() {
        this.props.loadCategories();
    }

    openForm(){
        this.setState({open:true});
    }

    closeForm(){
        this.setState({open:false});
    }

    onCategoryClick = categoryObj => {
        
        this.setState({
                category:categoryObj
        });

    }

    onCategoryDelete = categoryObj => {
        const {deleteCategory} = this.props;
        deleteCategory(categoryObj._id);
    }

    updateCategory = categoryObj => {
        const {updateCategory} = this.props;
        updateCategory(categoryObj);
        this.setState({category:categoryObj});
    }
    

    render(){

        const {categories} = this.props;
       
      
        return <Grid container>
                <Grid item xs={2} ms={2} lg={2}>
                        <Typography variant="h6" component="h3">
                        Categories
                        </Typography>
                        <Typography component="p">
                        Manage Categories
                        </Typography>     
                </Grid> 
                <Grid item xs={10} ms={10} lg={10}>
                        <Button variant="fab" color="primary" aria-label="Add" onClick={this.openForm}>
                            <AddIcon />
                        </Button>
                        <CreateCategoryForm open={this.state.open} onClose={this.closeForm}/>
                </Grid>
                <Grid item xs={4} ms={4} lg={4}>
                        <CategoryList items={categories} onClick={this.onCategoryClick} onDelete={this.onCategoryDelete}/>
                </Grid>
                <Grid item xs={8} ms={8} lg={8}>
                        <CategoryForm category={this.state.category} onUpdateCategory={this.updateCategory}/>
                </Grid>
             </Grid>
    }

}

function mapStateToProps(state){
    return {categories:state.categories};
}
  
function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}
  
export default connect(mapStateToProps, mapDispachToProps)(Category);

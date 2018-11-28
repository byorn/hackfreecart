import * as displayMessageActions from '../actions/displayMessageActions';
import {actionTypes} from './actionTypes';
import CategoryService from '../services/CategoryService';


export function createCategory(obj) {

    return (dispatch) => {
      
      return CategoryService.createCategory(obj).then(result => {
  
          if(result.status == 200){
            dispatch(categorySaved(result.data));
            dispatch(displayMessageActions.displaySuccess('Saved Category Successfully!'));
          }
          else{
            dispatch(displayMessageActions.displayError(result.response.data));
          }
        
      }).catch(error => {
         console.log(error);
      });
  
    };
     
  }


  export function updateCategory(obj) {
    
    return (dispatch) => {
      
      return CategoryService.updateCategory(obj).then(result => {
  
          if(result.status == 200){
            dispatch(categorySaved(result.data));
            dispatch(displayMessageActions.displaySuccess('Saved Category Successfully!'));
          }
          else{
            dispatch(displayMessageActions.displayError(result.response.data));
          }
        
      }).catch(error => {
         console.log(error);
      });
  
    };
     
  }

  export function deleteCategory(_id) {
    
    return (dispatch) => {
      
      return CategoryService.deleteCategory(_id).then(result => {
  
          if(result.status == 200){
            dispatch(categoryDeleted(_id));  
            dispatch(displayMessageActions.displaySuccess('Deleted Category Successfully!'));
          }
          else{
            dispatch(displayMessageActions.displayError(result.response.data));
          }
        
      }).catch(error => {
         console.log(error);
      });
  
    };
     
  }

  export function loadCategories() {
    return (dispatch) => {
      //dispatch(itemsIsLoading(true));
      return CategoryService.loadCategories().then(data => {
       
        dispatch(categoriesLoaded(data.data));
      }).catch(error => {
        console.log(error);
        dispatch(displayMessageActions.displayError(error));
      });
    };
  };

  export function categoryDeleted(_id) {
    return {
      type: actionTypes.CATEGORY_DELETED,
      id:_id
    };
  }

  export function categorySaved(category) {
    return {
      type: actionTypes.CATEGORY_SAVED,
      category
    };
  }

  export function categoriesLoaded(categories){
    return {
      type: actionTypes.CATEGORY_LOADED,
      categories
    }
  }
import * as displayMessageActions from '../actions/displayMessageActions';
import {actionTypes} from './actionTypes';
import CategoryService from '../services/CategoryService';


export function createCategory(obj) {

    return (dispatch) => {
      
      return CategoryService.createCategory(obj).then(result => {
  
          if(result.status === 200){
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
  
          if(result.status === 200){
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
  
          if(result.status === 200){
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

  //esy6 function that returns a function

  export const loadCategories = () =>  async dispatch =>  {
      //dispatch(itemsIsLoading(true));
      try{
         const data = await CategoryService.loadCategories();   
         dispatch(categoriesLoaded(data.data));
      }catch(error){
         dispatch(displayMessageActions.displayError(error));
      }
  };
  
  /*
  export const loadCategories = () => {
    return async (dispatch, getState) =>  {
      //dispatch(itemsIsLoading(true));
      try{
         const data = await CategoryService.loadCategories();   
         dispatch(categoriesLoaded(data.data));
      }catch(error){
         dispatch(displayMessageActions.displayError(error));
      }
    };
  };
  */

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
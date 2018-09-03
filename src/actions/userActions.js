import UserService from '../services/UserService';
import * as displayMessageActions from './displayMessageActions';
import {actionTypes} from './actionTypes';

export function updateUser(user, id) {
 
  return (dispatch) => {
  
    return UserService.updateUser(user, id).then(result => {
      if(result.status == 200){
        
        dispatch(userSaved(result.data));
      }else{
        dispatch(displayMessageActions.displayError(result.response.data));
      }
    }).catch(error => {
      throw (error);
    });

  };
   
}

export function userSaved(user){
  return {
    type: actionTypes.USER_SAVED,
    user
  };
}



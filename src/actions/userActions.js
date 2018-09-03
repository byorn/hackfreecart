import UserService from '../services/UserService';
import * as displayMessageActions from './displayMessageActions';
import {doLoggin} from './loginActions';
import {actionTypes} from './actionTypes';

export function updateUser(user, id) {
 
  return (dispatch) => {
  
    return UserService.updateUser(user, id).then(result => {
      if(result.status == 200){
        
        dispatch(doLoggin(result.data));
        dispatch(displayMessageActions.displaySuccess('Saved User Successfully!'));
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



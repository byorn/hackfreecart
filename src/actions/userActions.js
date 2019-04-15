import UserService from '../services/UserService';
import * as displayMessageActions from './displayMessageActions';
import {doLoggin} from './loginActions';
import {actionTypes} from './actionTypes';


export const updateUser = (user, id) => async (dispatch) => {
  const result = await UserService.updateUser(user, id);
  if(result.status === 200){
    dispatch(doLoggin(result.data));
    dispatch(displayMessageActions.displaySuccess('Saved User Successfully!'));
  }else{
    dispatch(displayMessageActions.displayError(result.response.data));
  }
}

export function updateProfilePic(obj, id){

  return (dispatch) => {
    return UserService.updateProfilePic(obj, id).then(result => {
      if(result.status === 200){
         dispatch(displayMessageActions.displaySuccess('Saved User Successfully!'));
      }else{
        dispatch(displayMessageActions.displayError(result.response.data));
      }
    }).catch(error => {
      throw (error);
    });
 } 

}

export function userSaved(user){
  return {
    type: actionTypes.USER_SAVED,
    user
  };
}



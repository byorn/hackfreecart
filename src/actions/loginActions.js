import LoginService from '../services/LoginService';
import Util from '../util/Util';
import * as displayMessageActions from '../actions/displayMessageActions';
import {actionTypes} from './actionTypes';

export const  login = (username, password) => async dispatch => {
    const result = await LoginService.login(username,password)
      if(result.status === 200){
        Util.saveUserTokenAndUserToLocalStorage(result.headers['x-auth-token'],result.data);
        dispatch(doLoggin(result.data));
      }else{
        dispatch(displayMessageActions.displayError(result.response.data));
      }
}

export const checkLogin = ()=>async dispatch=> {
  if(Util.getUserId()){
    const result = await LoginService.checkLogin();
    if(result.status===200){
        dispatch(doLoggin(result.data));
    }  
 }
}

export function doLoggin(obj){
  return {
    type: actionTypes.DO_LOGIN,
    obj
  };
}



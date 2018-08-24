import CreateAccountService from '../services/CreateAccountService';
import Util from '../util/Util';
import * as displayMessageActions from '../actions/displayMessageActions';

export function createAccount(obj) {
  
  return (dispatch) => {
    
    return CreateAccountService.createAccount(obj).then(result => {

        if(result.status == 200){
          Util.saveUserTokenAndUserToLocalStorage(result.headers['x-auth-token'],result.data);
          
          dispatch(createdAccount());
        }
        else{
          dispatch(displayMessageActions.displayError(result.response.data));
        }
      
    }).catch(error => {
       console.log(error);
    });

  };
   
}

export function createdAccount(){
  return {
    type: 'CREATED_ACCOUNT',
  };
}



import CreateAccountService from '../services/CreateAccountService';
import Util from '../util/Util';
import * as displayMessageActions from '../actions/displayMessageActions';
import { doLoggin } from '../actions/loginActions';


export const createAccount= obj => async dispatch => {
  
  const result = await CreateAccountService.createAccount(obj)

  if(result.status === 200){
    Util.saveUserTokenAndUserToLocalStorage(result.headers['x-auth-token'],result.data);
    dispatch(doLoggin(result.data));
  }
  else{
    dispatch(displayMessageActions.displayError(result.response.data));
  }
   
}





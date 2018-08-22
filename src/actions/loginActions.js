import LoginService from '../services/LoginService';

export function login(username, password) {
 
  return (dispatch) => {
  
    return LoginService.login(username,password).then(obj => {
      dispatch(doLoggin(obj));
    }).catch(error => {
      throw (error);
    });

  };
   
}

export function doLoggin(obj){
  return {
    type: 'DO_LOGIN',
    obj
  };
}



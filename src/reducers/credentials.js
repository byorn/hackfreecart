function credentials(state = {}, action){
  
  switch(action.type){
    case 'DO_LOGIN':
        return {'isLoggedIn':true};
        if(action.obj.length > 0){
           return {'isLoggedIn':true};
        }
    case 'CREATED_ACCOUNT':
        return {'isLoggedIn':true};
    default:
    return state;
  }

}
export default credentials;

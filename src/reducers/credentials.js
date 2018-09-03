function credentials(state = {}, action){
  
  switch(action.type){
    case 'DO_LOGIN':
        
        let newState = {...state};
        newState.isLoggedIn = true;
        newState.user = action.obj;
     
        return newState;
   
    default:
   
        return state;
  }

}
export default credentials;

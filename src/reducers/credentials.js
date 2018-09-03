function credentials(state = {}, action){
  
  switch(action.type){
    case 'DO_LOGIN':
        
        let newState = {...state};
        newState.isLoggedIn = true;
        newState.user = action.obj;
     
        return newState;
    case 'CREATED_ACCOUNT':
        let newState1 = {...state};
        newState1.isLoggedIn = true;
        newState1.user = action.obj;
    
        return newState1;
    default:
   
        return state;
  }

}
export default credentials;

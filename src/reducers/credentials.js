function credentials(state = {}, action){

  switch(action.type){
    case 'DO_LOGIN':
   
       
        if(action.obj.length > 0){
          
          return {'isLoggedIn':true};
        }
        
       
    default:
    return state;
  }

}
export default credentials;

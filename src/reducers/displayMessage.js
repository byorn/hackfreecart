function displayMessage(state = {}, action){
  
  switch(action.type){
    case 'CLOSE_DISPLAY_MESSAGE':
      const newState = {...state};
      newState.open=false;
      return newState;
    case 'DISPLAY_ERROR':
      return {'open':true, 'type':'error', 'message':action.message};      
    default:
      return state;
  }
}
export default displayMessage;

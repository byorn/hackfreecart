export function closeDisplayMessage(){
  return {
    type: 'CLOSE_DISPLAY_MESSAGE',
  };
}

export function displayError(message){
  return {
    type: 'DISPLAY_ERROR',
    message
  };
}



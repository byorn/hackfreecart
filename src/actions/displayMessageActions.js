import {actionTypes} from '../actions/actionTypes';
export function closeDisplayMessage(){
  return {
    type: 'CLOSE_DISPLAY_MESSAGE',
  };
}

export function displayError(message){
  return {
    type: actionTypes.DISPLAY_ERROR,
    message
  };
}

export function displaySuccess(message){
  return {
    type: actionTypes.DISPLAY_SUCCESS,
    message
  };
}



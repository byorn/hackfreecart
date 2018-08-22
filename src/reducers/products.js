//a reducer takes in two things

//1.) the action (info about what happend)
//2.) copy of current state

function products(state = [], action){

  switch(action.type){
    case 'PRODUCTS_LOADED':
        return action.products;
    default:
    return state;
  }

}
export default products;

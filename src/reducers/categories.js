function categories(state = [], action){

  switch(action.type){
    case 'CATEGORY_SAVED':
      let categories = state.filter(cat=>cat._id!=action.category._id);
      categories.push(action.category);
      return categories;
    
    case 'CATEGORY_LOADED':

      return action.categories;
    
    case 'CATEGORY_DELETED':
      let categoriesAfterDeleted = state.filter(cat=>cat._id!=action.id);
      return categoriesAfterDeleted;

    default:
      return state;
  }

}
export default categories;

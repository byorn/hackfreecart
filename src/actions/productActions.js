import ProductsService from '../services/ProductsService';


export function productsLoadedSuccess(products) {
  return {
    type: 'PRODUCTS_LOADED',
    products
  };
}


export function loadProducts() {
  return (dispatch) => {
    //dispatch(itemsIsLoading(true));
    return ProductsService.getAllProducts().then(products => {
      dispatch(productsLoadedSuccess(products));
    }).catch(error => {
      throw (error);
    });
  };
};

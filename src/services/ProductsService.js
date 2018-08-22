class ProductsService {
  static getAllProducts() {
    return fetch('/shoppingcart/products.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductsService;

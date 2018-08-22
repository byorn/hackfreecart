export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product
  };
}

export function clearCart() {
  return {
    type: 'CLEAR_CART'
  };
}

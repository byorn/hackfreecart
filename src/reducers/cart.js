function cart(state = [], action){

  switch(action.type){
    case 'ADD_TO_CART':
        let product = action.product;
        let cartItems = state.cartItems;
        let cartTotal = state.cartTotal;

        var existingCartItem = cartItems.find(c =>  c.productId === product.productId);
        if(existingCartItem){
            existingCartItem.qty +=1;
            cartTotal += existingCartItem.price;
            existingCartItem.totalPrice += existingCartItem.price;

           return {cartTotal:cartTotal, cartItems: [ ...cartItems.filter(ci => ci.productId !== existingCartItem.productId), existingCartItem   ]};
        }
        let newCartItem = Object.assign(product, {qty:1, totalPrice:product.price});
        cartTotal = cartTotal + newCartItem.price;
        return {cartTotal:cartTotal,cartItems: [...cartItems, newCartItem]};

    case 'CLEAR_CART':
        return {cartTotal:0, cartItems:[]};
    default:
    return state;
  }

}
export default cart;

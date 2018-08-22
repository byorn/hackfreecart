class InventoryService {
  static getInventory() {
    return fetch('/shoppingcart/inventory.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default InventoryService;

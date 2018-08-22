import InventoryService from '../services/InventoryService';

export const updateInventory = (productId, qty) => {
  return {
    type: 'UPDATE_INVENTORY',
    productId,
    qty
  };
}


export function inventoryLoadedSuccess(inventory) {
  return {
    type: 'INVENTORY_LOADED',
    inventory
  };
}

export function loadInventory() {
  return (dispatch) => {
    //dispatch(itemsIsLoading(true));
    return InventoryService.getInventory().then(inventory => {
      dispatch(inventoryLoadedSuccess(inventory));
    }).catch(error => {
      throw (error);
    });
  };
};

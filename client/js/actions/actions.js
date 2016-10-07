import * as actionTypes from '../constants/actionTypes'

//fetch product list
export function fetchProducts() {
  return { type: actionTypes.FETCH_PRODUCTS };
}

export function fetchCustomerDetails() {
  return { type: actionTypes.FETCH_CUSTOMER_DETAILS};
}

// toggle selected products
export function selectProduct(product) {
  
  return {type: actionTypes.TOGGLE_SELECT_PRODUCT, data:product};
}

//checkout action
export function checkout() {
  return {type: actionTypes.CHECKOUT};
}

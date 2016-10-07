import {
  CHECKOUT,
  ERROR_WITH_CHECKOUT,
  ADD_CHECKOUT_CONFIRM
} from '../constants/actionTypes';

//external api handler
import asyncFetch from '../lib/fetch'


export default store => next => action => {

  if(action.type == CHECKOUT) {
    //submit basket contents to checkout api resource

    const { basket, customer } = store.getState();

    if (basket.length > 0) {
      //send to api
      const url = 'http://localhost:8080/checkout'
      asyncFetch(url, {'Content-Type': 'application/json'}, {customerId: customer.id, basket: basket}, 'POST')
      .then(data => {
        next({type: ADD_CHECKOUT_CONFIRM, data: data.confirmation});
      }).catch(error => {
        next({type: ERROR_WITH_CHECKOUT, data: error});
      });
    }
  }
  return next(action);
}

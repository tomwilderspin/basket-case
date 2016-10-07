import {
  ADD_CUSTOMER_DETAILS,
  FETCH_PRODUCTS,
  FETCH_CUSTOMER_DETAILS,
  ERROR_FETCHING_PRODUCTS,
  ADD_PRODUCTS
} from '../constants/actionTypes';

//external api handler
import asyncFetch from '../lib/fetch'

export default store => next => action => {

  if ( action.type == ADD_CUSTOMER_DETAILS) {

      //request product list from api for customer
      var location = action.data.location;
      const url = `http://localhost:8080/products?location=${location}`;

      //make async request
      asyncFetch(url, {})
      .then(data => {
        next({type: ADD_PRODUCTS, data: data.products})
      }).catch(error => {
        next({type: ERROR_FETCHING_PRODUCTS})
      });

  }

  return next(action);
}

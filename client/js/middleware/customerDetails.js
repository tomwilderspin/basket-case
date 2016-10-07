import {
  FETCH_CUSTOMER_DETAILS,
  ERROR_FETCHING_CUSTOMER_DETAILS,
  ADD_CUSTOMER_DETAILS
} from '../constants/actionTypes';

//external api handler
import asyncFetch from '../lib/fetch'

export default store => next => action => {

  
  //pulls customer information from the api
  if (action.type == FETCH_CUSTOMER_DETAILS) {

    var id = store.getState().customer.id;

    const url = `http://localhost:8080/customers/${id}`

    //request custoemr info from api
    asyncFetch(url, {})
    .then(data => {
      next({type: ADD_CUSTOMER_DETAILS, data: data})
    }).catch(error => {
      next({type: ERROR_FETCHING_CUSTOMER_DETAILS, data: error})
    });
  }
  return next(action);
}

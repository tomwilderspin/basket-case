
import {
  ADD_CUSTOMER_DETAILS,
  ERROR_FETCHING_CUSTOMER_DETAILS
} from '../constants/actionTypes'

export function customerReducer (state = {}, action) {

  switch(action.type) {
    case ADD_CUSTOMER_DETAILS :
    case ERROR_FETCHING_CUSTOMER_DETAILS:
      return action.data;
    default: return state;
  }
}


import {
  ADD_PRODUCTS,
  ERROR_FETCHING_PRODUCTS
} from '../constants/actionTypes'

export function productsReducer (state = [], action) {

  switch(action.type) {
    case ADD_PRODUCTS :
    case ERROR_FETCHING_PRODUCTS:
      return action.data;
    default: return state;
  }
}

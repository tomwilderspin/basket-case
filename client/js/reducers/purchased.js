
import {
  ADD_CHECKOUT_CONFIRM
} from '../constants/actionTypes'

export function purchasedReducer (state = {}, action) {

  switch(action.type) {
    case ADD_CHECKOUT_CONFIRM :
      return action.data.basket;
    default: return state;
  }
}

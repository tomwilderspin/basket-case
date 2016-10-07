
import {
  TOGGLE_SELECT_PRODUCT
} from '../constants/actionTypes'

export function basketReducer (state = {}, action) {

  switch(action.type) {
    case  TOGGLE_SELECT_PRODUCT :

      const inBasket = state.reduce((flag, name) => {
        return name == action.data.name
      },false);

      return !inBasket ?
        [...state, action.data.name] :
        state.filter((name) => {return name != action.data.name});
    default: return state;
  }
}

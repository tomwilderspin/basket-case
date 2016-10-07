
import { basketReducer } from './basket'
import { purchasedReducer } from './purchased'
import { productsReducer } from './products'
import { customerReducer } from './customer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    customer: customerReducer,
    purchased: purchasedReducer,
    pageTitle: (state = '',action) => {return state}
})

export default rootReducer

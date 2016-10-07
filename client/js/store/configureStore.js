import { createStore, applyMiddleware, compose } from 'redux';

//thunk middlware helper
import thunk from 'redux-thunk'

//combined reducers map
import rootReducer from '../reducers/rootReducer';

//dev tools [would be excluded from production]
import DevTools from '../containers/DevTools';

//middleware event logic handlers
import checkout from '../middleware/checkout';
import customerDetails from '../middleware/customerDetails';
import productsList from '../middleware/productsList';


export default function configureStore(initialState){

  return createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, checkout, customerDetails, productsList),
        DevTools.instrument()
      )
  );
}

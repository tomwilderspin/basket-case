import 'babel-polyfill'
import 'bootstrap'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
//would remove these via a production flag
import DevTools from './containers/DevTools'

import configureStore from './store/configureStore'

//inital state for application
const initalState = {
  customer: {id: getCustomerIdFromCookie(), location:''},
  products:[],
  basket:[],
  purchased:[],
  pageTitle: 'Product Selector'
}

function getCustomerIdFromCookie() {
  return document.cookie.split(';').reduce((customerId, value) => {
    let split = value.split('=');
    return 'customerID' == split[0] ?
      split[1] : customerId
  }, 123);
}


const store = configureStore(initalState);

/**
render with redux dev tool bar
<Provider store={store}>
    <div>
        <App />
        <DevTools />
    </div>
</Provider>
**/

render(
  <Provider store={store}>
      <div>
          <App />

      </div>
  </Provider>,
    document.getElementById('app')
);

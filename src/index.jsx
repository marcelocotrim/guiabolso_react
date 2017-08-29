import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'App'

let store = require('store').configure()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import { render } from 'react-dom'

import Amplify from 'aws-amplify'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import App from './App'
import awsExports from './aws-exports'
import { register as registerServiceWorker } from './serviceWorker'

Amplify.configure(awsExports)

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker()

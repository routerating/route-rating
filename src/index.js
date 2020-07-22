import { hydrate, render } from 'react-dom'

import Amplify from 'aws-amplify'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import awsExports from './aws-exports'
import { register as registerServiceWorker } from './serviceWorker'

Amplify.configure(awsExports)

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement,
  )
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement,
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./redux/store.js"
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId='425906653251-mvs7u9t4dkfghnu4haro3q2ock1fnhla.apps.googleusercontent.com'>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
</GoogleOAuthProvider>
)

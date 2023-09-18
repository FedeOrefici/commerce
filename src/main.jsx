import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextDataProvider from '../context/ContextData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </React.StrictMode>,
)

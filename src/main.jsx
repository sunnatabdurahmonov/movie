import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { HeaderContextProvider } from './Component/Context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HeaderContextProvider> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </HeaderContextProvider> */}
  </React.StrictMode>,
)

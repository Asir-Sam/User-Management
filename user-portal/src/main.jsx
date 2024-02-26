import React from 'react'
import ReactDOM from 'react-dom/client'
import  { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
//import Login from './components/Login'
//import SampleHome from './components/SampleHome'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>    
    </BrowserRouter>
  </React.StrictMode>,
)

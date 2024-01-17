import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters';
import { CartProvider } from './context/contextCart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FiltersProvider>
      <CartProvider>
    <App />
    </CartProvider>
      </FiltersProvider>
  </React.StrictMode>,
)

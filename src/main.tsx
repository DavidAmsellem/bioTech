import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './index.css'

// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

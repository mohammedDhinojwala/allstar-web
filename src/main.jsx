import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

createRoot(document.getElementById('root')).render(
  <HelmetProvider context={helmetContext}>
    <StrictMode>
        <App />
    </StrictMode>,
  </HelmetProvider>
  
)

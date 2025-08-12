import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { SafeArea } from '@capacitor-community/safe-area';

SafeArea.enable({
  config: {
    customColorsForSystemBars: true,
    statusBarColor: '#00000000', // transparent
    statusBarContent: 'light',
    navigationBarColor: '#00000000', // transparent
    navigationBarContent: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

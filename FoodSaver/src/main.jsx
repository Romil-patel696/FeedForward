import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext';
import { FoodProvider } from './context/FoodContext';
import { NotificationProvider } from './context/NotificationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FoodProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </FoodProvider>
    </AuthProvider>
  </React.StrictMode>,
)

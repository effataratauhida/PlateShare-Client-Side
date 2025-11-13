import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Routes';
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import 'aos/dist/aos.css';
import Aos from 'aos'

   
  Aos.init({
    duration: 1000, 
    once: true, 
    });
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>


    <Toaster position="top-center" 
    reverseOrder={false}
    toastOptions={{
    duration: 2500,
    style: {
      background: '#edf8e9',
      color: '#005a32',
      border: '2px solid #005a32',
      padding: '16px 24px',
      borderRadius: '10px',
      fontSize: '18px',
    }}} />

 


  </StrictMode>,
)

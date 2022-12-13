import React from 'react'
import ReactDOM from 'react-dom/client'

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<TaskProvider> <HomePage /> </TaskProvider>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

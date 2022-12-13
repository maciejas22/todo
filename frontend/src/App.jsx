import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx'

function App() {

  return (
    <div>
          <Routes>
            <Route element={ <PrivateRoutes/> }>
              <Route element = { <HomePage/>} path="/" exact />
            </Route>
            <Route element = { <LoginPage/> } path="login/" />
            <Route element = { <RegisterPage/> } path="register/" />
          </Routes>
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

import ContentCSS from './LoginPage.module.css'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext)
  return (
    <div className={ContentCSS.hero}>
        <h1 className={ContentCSS.header}>Sign In</h1>

        <form className={ContentCSS.loginForm} onSubmit={loginUser}>
            <p className={ContentCSS.label}>username:</p>
            <input type="text" name="username" className={ContentCSS.input} placeholder="enter username"/> 

            <p className={ContentCSS.label}>password:</p>
            <input type="password" name="password" className={ContentCSS.input} placeholder="enter password"/> 

            <button className={ContentCSS.submitBtn} value="Submit">Submit</button>
        </form>

        <p className={ContentCSS.register}>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default LoginPage
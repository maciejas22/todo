import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import ContentCSS from "./RegisterPage.module.css";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  return (
    <div className={ContentCSS.hero}>
      <h1 className={ContentCSS.header}>Register</h1>

      <form className={ContentCSS.loginForm} onSubmit={registerUser}>
        <p className={ContentCSS.label}>username:</p>
        <input
          type="text"
          name="username"
          className={ContentCSS.input}
          placeholder="enter username"
        />

        <p className={ContentCSS.label}>email:</p>
        <input
          type="text"
          name="email"
          className={ContentCSS.input}
          placeholder="enter email"
        />

        <p className={ContentCSS.label}>password:</p>
        <input
          type="password"
          name="password"
          className={ContentCSS.input}
          placeholder="enter password"
        />
        <p className={ContentCSS.label}>confirm password:</p>
        <input
          type="password"
          name="password2"
          className={ContentCSS.input}
          placeholder="confirm password"
        />

        <button className={ContentCSS.submitBtn} value="Submit">
          Submit
        </button>
      </form>

      <p className={ContentCSS.register}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

import { useContext } from "react";
import { Link } from "react-router-dom";

import ContentCSS from "./Header.module.css";

import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div className={ContentCSS.header}>
      <p className={ContentCSS.logo}>
        #<span className={ContentCSS.blue}>to</span>do
      </p>
      <div className={ContentCSS.container}>
        <p>{user.username}</p>
        <button onClick={logoutUser} className={ContentCSS.link}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

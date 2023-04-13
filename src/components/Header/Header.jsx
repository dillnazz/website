import React from "react";
import { Link } from "react-router-dom";
import Logo from "./okurmen-logo 1.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="block_header">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav>
            <Link to="/home">Главная</Link>
            <Link to="/course">Курсы</Link>
            <Link to="/teachers">Преподавател</Link>
            <Link to="/about">О нас</Link>  
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

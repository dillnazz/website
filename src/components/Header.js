import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from '../img/okurmen-logo 1.png';

// footer img

import Footer2gis from '../img/2gis.png';
import Map2gis from '../img/map-2gis.png';
import Phone from '../img/phone.png';
import Instagram  from '../img/instagram.png';
import Email from '../img/email@.png';
import Adress from '../img/adress.png'



import './Header.css'


const Header = () => {
  return (
    <>
    <div className="container">
      <div className="control-logo-nav">
            <img src={Logo} alt=""/>
     <nav className="nav">
        <ul>
          <li>
            <Link to="/">Башкы бет</Link>
          </li>
          <li>
            <Link to="/course">Курсы</Link>
          </li>
          <li>
            <Link to="/teachers">Мугалимдер</Link>
          </li>
          <li>
            <Link to="/about">Окурмен</Link>
          </li>
          <li>
            <Link to="/comments">Отзыв</Link>
          </li>
          <li>
            <Link to="/contact">Контакт</Link>
          </li>
        </ul>
      </nav>
      </div>
        
        
    </div>
      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">


            <div className="footer-control">

            <div className="footer-content">
              <div className="footer-map">
                <img className="footer-2gis" src={Footer2gis} alt=""/> <span className="span-footer">Наш адрес</span>
              </div>
              <div>
                <img src={Map2gis} alt=""/>
              </div>
            </div>

              <div className="footer-right">

                <div className="phone">
                <a href="#"> <img src={Phone} alt=""/> </a>  
                  <span className="phone-span">+999 (xxx) xxx xxx</span>
                </div>

                <div className="instagram">
                <a href="#"> <img src={Instagram} alt=""/> </a>  
                <span className="instagram-span">okurmen.it</span>
                </div>

                <div className="email">
                  <img src={Email} alt=""/>
                  <span className="email-span">okumen@gmail.com</span>
                </div>

                <div className="adress">
                  <img src={Adress} alt=""/>
                  <span className="adress-span">Трусбекова 109 Максимум 4 этаж 407 / 411 - кабинка</span>
                  <h1>ggggg</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;

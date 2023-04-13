import React from 'react';
import Logo from '../../img/okurmen-logo 1.png';

import './Header.css';

const Header = () => {
  return (
        <div className="container">
            <div className='header-wrapper'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>

        <nav className='nav'>
            <ul> 
                <li>Башкы бет</li>
                <li>Курстар</li>
                <li>Мугалимдер</li>
                <li>Окурмен</li>
                <li>Отзыв</li>
                <li>Контакт</li>
            </ul>
        </nav>

            <header className='header'>
                <div>ff</div>    
            </header>                                                                                
            </div>
        </div>
  )
};

export default Header;

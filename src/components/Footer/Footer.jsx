import React from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="block-footer">
          <div className='footer-block1'>
          <div className="footer-head">
            <BsFillSendFill style={{width:'34px', height:'34px'}}/>
            <p className='fotHead-p'>Биздин дарек</p>
          </div>
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
          </div>
          <div className='footer-block2'>
              <div className='div-a'>
                <a href="#"> <BsFillTelephoneFill style={{fontSize:'18px'}}/> </a> <span>+999 (xxx) xxx xxx</span>
              </div>
              <div className='div-a'>
                <a href=""> <BsEnvelopeFill style={{fontSize:'18px'}}/> </a> <span>okumen@gmail.com</span>
              </div>
              <div className='div-a'>
                <a href=""> <BsFacebook style={{fontSize:'18px'}}/> </a> <span>okurmen.it</span>
              </div>
              <div className='div-a'>
                <a href=""> <AiOutlineInstagram style={{fontSize:'18px'}}/> </a> <span>okurmen.it</span>
              </div>
              <div className='div-a'>
                <a href=""> <FaMap style={{fontSize:'18px'}}/> </a> <span>Трусбекова 109 Максимум 
4 этаж 407 / 411 - кабинка</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer


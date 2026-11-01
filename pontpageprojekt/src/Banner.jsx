import React from 'react';
import './Banner.css';
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SplitText from './SplitText.jsx';
import ZoomInText from './ZoomInText.jsx';
import { useTranslation } from 'react-i18next';






const Banner = () => {
  const { t } = useTranslation();
  const subtitle1 = t("banner.subtitle1");
  const bannerbtn = t("banner.bannerbtn");





  return (
    <section className="banner">
      {/* Social bar */}
      <div className="social-bar ">
        
        <div className="card  ">
          <ul>
            <li className="iso-pro zoom-in">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.facebook.com/erik.sasfalvi" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="svgsocial" />
  </a>
              <div className="textsocial">Facebook</div>
            </li>

            <li className="iso-pro zoom-in">
              <span></span>
              <span></span>
              <span></span>
              
                <a href="https://www.facebook.com/erik.sasfalvi" target="_blank" rel="noopener noreferrer">
    <FaTiktok  className="svgsocial" />
  </a>
              
              <div className="textsocial">TikTok</div>
            </li>

            <li className="iso-pro zoom-in">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.instagram.com/erik_sasfalvi/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="svgsocial" />
  </a>
              <div className="textsocial">Instagram</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Középső tartalom */}
      <div className="banner-content">
        <h1 className="main-title">
          <span className='pont zoom-in'>PONT
          </span>
          <span className="page zoom-in">
            PAGE
          </span>
        </h1>
        <div className="subtitle-container">
         <div className="subtitle">
          <SplitText text={subtitle1} 
          speed='fast'
          variant='white' />
         </div>
        </div>
<div className="button-container">
  <a href="#contact">
<button className="uiverse zoom-in" >
  <div className="wrapper">
    <span>{bannerbtn}</span>
    <div className="circle circle-12"></div>
    <div className="circle circle-11"></div>
    <div className="circle circle-10"></div>
    <div className="circle circle-9"></div>
    <div className="circle circle-8"></div>
    <div className="circle circle-7"></div>
    <div className="circle circle-6"></div>
    <div className="circle circle-5"></div>
    <div className="circle circle-4"></div>
    <div className="circle circle-3"></div>
    <div className="circle circle-2"></div>
    <div className="circle circle-1"></div>
  </div>
</button>
</a>

</div>

      </div>
    </section>
  );
};

export default Banner;

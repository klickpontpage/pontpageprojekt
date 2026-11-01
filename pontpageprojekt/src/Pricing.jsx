import React from "react";
import "./Pricing.css";
import bgBall from "./img/ball.png"; 
import { Parallax } from "react-scroll-parallax";
import { FiCheckCircle } from "react-icons/fi";
import { MdRadioButtonChecked } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ScrollZoomMotion from "./ScrollZoomMotion";
import ScrollFadeUp from "./ScrollFadeUp";
import { useTranslation } from "react-i18next";


const Pricing = () => {
  const { t } = useTranslation();

  return (
    
    <div className="pricing-section" id="pricing">
      <ScrollFadeUp>
      <h2 className="pricing-title ">{t("price.pricetitle1")}</h2>
        <p className="pricing-description ">{t("price.pricesubstitle")}</p>
</ScrollFadeUp>
      {/* Háttér gömbök */}
       <Parallax speed={-10}><img src={bgBall} alt="background ball" className="ball ball-top-nagy" /></Parallax> {/*nagy gömb*/}
      <Parallax speed={-20}><img src={bgBall} alt="background ball" className="ball ball-top-right" /></Parallax> {/*2kisebb gömb*/}
      <Parallax speed={20}><img src={bgBall} alt="background ball" className="ball ball-bottom-kicsi" /></Parallax> {/*kicsi gömb*/}
      <Parallax speed={-100}><img src={bgBall} alt="background ball" className="ball ball-bottom-kozep" /></Parallax> {/*közepes gömb*/}
<ScrollZoomMotion>
      <div className="pricing-cards">
        <div className="cardprice outer-card">
          <h3 className="cardprice-title">{t("price.pricebasic")}</h3>
          <p className="price">{t("price.pricebasictext")}</p>
          <ul>
            <li><FiCheckCircle className="icon" /> {t("price.pricebasicsite")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebasicseo")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebasicrespon")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebasicdesign")}</li>
          </ul>
          <a href="#contact"><button>{t("price.pricebasicbtn")}</button></a>
        </div>

        <div className="cardprice inner-card">
          <h3 className="cardprice-title">{t("price.pricepro")}</h3>
          <p className="price">{t("price.priceprotext")}</p>
          <ul>
            <li><FiCheckCircle className="icon" /> {t("price.priceprosite")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceproseo")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceprorespon")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceprosupport")}</li>
          </ul>
          <a href="#contact"><button>{t("price.priceprobtn")}</button></a>
        </div>

        <div className="cardprice inner-card">
          <h3 className="cardprice-title">{t("price.pricebooking")}</h3>
          <p className="price">{t("price.pricebookingtext")}</p>
          <ul>
            <li><FiCheckCircle className="icon" /> {t("price.pricebookingsite")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebookingbefore")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebookingsupport")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.pricebookingsurface")}</li>
            
          </ul>
          <a href="#contact"><button>{t("price.pricebookingbtn")}</button></a>
        </div>

        <div className="cardprice outer-card">
          <h3 className="cardprice-title">{t("price.priceweband3d")}</h3>
          <p className="price">{t("price.priceweband3dtext")}</p>
          <ul>
            <li><FiCheckCircle className="icon" /> {t("price.priceweband3dbefore")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceweband3duiux")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceweband3dsurface")}</li>
            <li><FiCheckCircle className="icon" /> {t("price.priceweband3dsupport")}</li>
          </ul>
          <a href="#contact"><button>{t("price.priceweband3dbtn")}</button></a>
        </div>
      </div>
      </ScrollZoomMotion>
    </div>
    
  );
};

export default Pricing;

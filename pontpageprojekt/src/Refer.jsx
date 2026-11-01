import React from "react";
import './Refer.css';
import szentref from './img/szentkiralyrefsm.mp4';
import diorref from './img/diorrefi.mp4';
import goshenref from './img/goshenref2.0sm.mp4';
import gyudiref from './img/Gyudirefsm.mp4';
import eurocorn from './img/eurocornrefsm.mp4';
import elevenpilates from './img/elevenpilrefsm.mp4';
import kertiko from './img/kertikoref.mp4'
import thermotwin from './img/thermoref.mp4'
import ScrollFadeUp from "./ScrollFadeUp";
import { useTranslation } from "react-i18next";




   const references = [
  { title: 'reference.referszent', video: szentref, tech: ['HTML', 'CSS', 'JavaScript','React.Js', 'Blender', 'SEO'],  href: "https://goshen.hu/"},
  { title: 'reference.refereleven', video: elevenpilates, tech: ['HTML', 'CSS', 'WordPress','reference.referfoglaló', 'SEO'], href: "https://www.elevenpilates.hu/" },
  { title: 'reference.refergoshen', video: goshenref, tech: ['CSS', 'WordPress','reference.referfoglaló','SEO' ], href: "https://goshen.hu/" },
  { title: 'reference.referthermo', video: thermotwin, tech: ['HTML', 'CSS', 'WordPress', 'SEO'], href: "https://thermotwin.hu/" },
  { title: 'reference.refergyudi', video: gyudiref, tech: ['HTML', 'CSS', 'WordPress', 'SEO' ], href: "https://gyudituzep.hu/" },
  { title: 'reference.refereurocorn', video: eurocorn, tech: ['CSS', 'WordPress', 'reference.refertöbbnyelv', 'SEO'], href: "https://eurocorn.hu/" },
  { title: 'reference.referdior', video: diorref, tech: ['HTML', 'CSS', 'Blender','Figma', 'SEO' ],  },
  { title: 'reference.referkerti', video: kertiko, tech: ['HTML', 'CSS', 'WordPress', 'SEO'], href: "http://kertikokft.hu/" },
  

];

const Refer = () => {
  const { t } = useTranslation();

 const items = references.map((k) => ({
  ...k,

    title: t(k.title),
    
    
      tech: k.tech.map((tag) => (String(tag).startsWith("reference.") ? t(tag) : tag)),
  }));




  return (
    <section className="portfolio-section" id="reference">
      <ScrollFadeUp>
  <h2 className="maintitleref">
    <span className="vege ">{t("reference.referencetitle1")}</span>
    <span className="eleje"> {t("reference.referencetitle2")}</span>
    </h2>
    <a href="#contact">
  <button className="cta-button scrollText">{t("reference.referencebtn")}</button>
</a>
</ScrollFadeUp>

  <div className="portfolio-grid">
    {items.map((ref, i) => (
  <div className="portfolio-item hover-target" key={i}>
    <h3>{ref.title}</h3>

    {ref.href ? (
      <a
        href={ref.href}
        rel="noopener noreferrer"
        className="video-link"
        aria-label={`${ref.title} megnyitása új lapon`}
      >
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={ref.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
    ) : (
      <video autoPlay muted loop playsInline preload="metadata">
        <source src={ref.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}

    <div className="tech-tags">
      {ref.tech.map((tag, index) => (
        <span key={index} className="tech-tag">{tag}</span>
      ))}
    </div>
  </div>
))}
  </div>
</section>
  );
};



  

export default Refer;
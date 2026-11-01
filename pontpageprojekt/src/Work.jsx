import React from 'react';
import './work.css';
import bgBall from './img/ball.png'; 
import { Parallax } from 'react-scroll-parallax';
import ScrollZoomMotion from './ScrollZoomMotion.jsx'; 
import ScrollFadeUp from './ScrollFadeUp.jsx';
import { useTranslation } from "react-i18next";

const awards_keys = [
  { text: 'work.workresponsive', sub: 'work.workresponsivetxt' },
  { text: 'work.workseo', sub: 'work.workseotext' },
  { text: 'work.workdesign', sub: 'work.workdesigntxt' },
  { text: 'work.workdomain', sub: 'work.workdomaintxt' },
  { text: 'work.workmaint', sub: 'work.workmainttxt' },
];
 const cards_keys = [
  { title: 'work.workkonz', prompt: 'work.workkonztext'},
  { title: 'work.workterv', prompt: 'work.worktervtext'},
  { title: 'work.workfej', prompt: 'work.workfejtext'},
  { title: 'work.workkesz', prompt: 'work.workkesztext'},
];




const Work = () => {
  const { t, i18n } = useTranslation();
  const worktitle1 = t("work.worktitle1");
  const worktitle2 = t("work.worktitle2");
  
    const cards = cards_keys.map(k => ({
    title: t(k.title),
    prompt: t(k.prompt),
  }));
  const awards = awards_keys.map(k => ({
    text: t(k.text),
    sub: t(k.sub),
  }));
  






  return (
    <section className="work-section " id="services">
      <h2 className="maintitlework ">
    <span className="start ">{worktitle1}</span>
    <span className="end">{worktitle2}</span>
    </h2>



      <Parallax speed={-20}><img src={bgBall} alt="background ball" className="ballwork ball-top-nagywork" /></Parallax> {/*nagy gömb*/}
       <Parallax speed={-15}><img src={bgBall} alt="background ball" className="ballwork ball-top-rightwork" /></Parallax>
      <Parallax speed={-30}><img src={bgBall} alt="background ball" className="ballwork ball-bottom-kicsiwork" /></Parallax>
      

      <ScrollFadeUp>
        <div className="cards-wrapper ">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="container " key={i}>
            <div className="canvas ">
              
              {[...Array(25)].map((_, j) => (
                <div className={` tracker tr-${j + 1}`} key={j}></div>
              ))}

              <div id="cardservices" > 
                <p id="prompt">{cards[i].prompt}</p>
                <div className="titleservices ">{cards[i].title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </ScrollFadeUp>

      {/* Alsó rész */}
      <div className="scroller-wrapper">
        <div className="scroller-track">
          {[...awards, ...awards].map((item, index) => (
            <div className="scroller-item" key={index}>
              <h3>{item.text}</h3>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

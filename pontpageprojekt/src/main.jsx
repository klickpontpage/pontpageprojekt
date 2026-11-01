import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./i18n";

import NavBar from "./NavBar.jsx";
import BackgroundVideo from "./BackgroundVideo.jsx";
import Banner from "./Banner.jsx";
import Work from "./Work.jsx";
import Refer from "./Refer.jsx";
import CustomCursor from "./CustomCursor";
import Pricing from "./Pricing.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Preloader from "./Preloader.jsx";
import Error from "./Error.jsx";
import Terms from "./Terms.jsx";
import Data from "./data.jsx";

// fő tartalom – most már kap egy propot, hogy jelezze, ha a videó kész
function HomePage({ onVideoReady }) {
  return (
    <>
      {/* A háttérvideó már a preloader alatt is tölt */}
      <BackgroundVideo onReady={onVideoReady} />
      <NavBar />
      <Banner />
      <CustomCursor />
      <ParallaxProvider>
        <Work />
        <Refer />
        <Pricing />
      </ParallaxProvider>
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  // amikor a fontos assetek (pl. videó) betöltöttek
  const [assetsReady, setAssetsReady] = useState(false);
  // amíg true, a preloader látszik, de a tartalom már mögötte ott van
  const [showPreloader, setShowPreloader] = useState(true);

  const handleVideoReady = () => {
    // BackgroundVideo szól, ha lejátszható / betöltött
    setAssetsReady(true);
  };

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && (
        <Preloader
          readyToHide={assetsReady}
          onFinish={handlePreloaderFinish}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage onVideoReady={handleVideoReady} />} />
        <Route path="*" element={<Error />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

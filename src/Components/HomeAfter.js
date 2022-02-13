import React from "react";
import Experience from "./Experience";
import Footer from "./Footer";
import GameProvider from "./GameProvider";
import HeroBanner from "./HeroBanner";
import LoggedHeader from "./LoggedHeader";
import Why from "./Why";
import WinnersList from "./WinnersList";
import Testimonial from "./Testimonial";


const HomeAfter = () => {
  return (
    <div className="home">
      <LoggedHeader />
      <HeroBanner />
      <div className="winning">
        <div className="container-fluid pl-0 pr-0 pb-3">
          <Why rightPart="should" classType="after" />
        </div>
      </div>

      <WinnersList classType="winners" conditionRender={true} />

      <Experience />
      <GameProvider />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeAfter;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Why from "./Why";
import Experience from "./Experience";
import GameProvider from "./GameProvider";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import WinnersList from "./WinnersList";
import Testimonial from "./Testimonial";
import Header from "./Header";
import LoggedHeader from "./LoggedHeader";



const Home = () => {
  let auth;
  auth = localStorage.getItem("auth")
  return (
    < div className="home" >
      {
        !auth ? <Header /> : <LoggedHeader />
      }
      <HeroBanner />
      <Why />
      <WinnersList />
      <Experience />
      <GameProvider />
      <Testimonial />
      <Footer />
    </div >
  );
};

export default Home;

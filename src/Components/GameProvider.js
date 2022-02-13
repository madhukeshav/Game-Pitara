import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import game1 from "./Assets/img/gameprovider/logo-1.png";
import game2 from "./Assets/img/gameprovider/logos2.png";
import game3 from "./Assets/img/gameprovider/logos3.png";
import game4 from "./Assets/img/gameprovider/logos4.png";
import game5 from "./Assets/img/gameprovider/logos5.png";
import game6 from "./Assets/img/gameprovider/logos6.png";
import game7 from "./Assets/img/gameprovider/logos7.png";
import game8 from "./Assets/img/gameprovider/logos8.png";
import game9 from "./Assets/img/gameprovider/logos9.png";
import game10 from "./Assets/img/gameprovider/logos10.png";
import game11 from "./Assets/img/gameprovider/logos11.png";
import game12 from "./Assets/img/gameprovider/logos12.png";
const GameProvider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // loop: true,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="gameprovider">
      <div className="heading">
        <h3>Game Provider</h3>
      </div>
      <div className="sliders">
        <Slider {...settings}>
          <img src={game1} alt="" />
          <img src={game2} alt="" />
          <img src={game3} alt="" />
          <img src={game4} alt="" />
          <img src={game6} alt="" />
          <img src={game7} alt="" />
          <img src={game8} alt="" />
          <img src={game9} alt="" />
          <img src={game10} alt="" />
          <img src={game11} alt="" />
          <img src={game12} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default GameProvider;

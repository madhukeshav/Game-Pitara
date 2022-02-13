import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import banner1 from "./Assets/img/home/banner/banner_1.jpg"
import banner2 from "./Assets/img/home/banner/banner_2.jpg"
import banner3 from "./Assets/img/home/banner/banner_3.jpg"
import banner4 from "./Assets/img/home/banner/banner_4.jpg"


const HeroBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="home__banner home__banner_img_2" >
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item  >

        <Carousel.Item className="home__banner home__banner_img_1" >
          <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
          />
        </Carousel.Item  >

        <Carousel.Item className="home__banner home__banner_img_3" >
          <img
            className="d-block w-100"
            src={banner3}
            alt="First slide"
          />
        </Carousel.Item  >
        <Carousel.Item className="home__banner home__banner_img_4" >
          <img
            className="d-block w-100"
            src={banner4}
            alt="First slide"
          />
        </Carousel.Item  >

      </Carousel>


    </div>
  );
};

export default HeroBanner;

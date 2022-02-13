import React from "react";
import facebook from "./Assets/img/footer/facebook.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import icon from "./Assets/img/footer/icon.png";
import persion_1 from './Assets/img/testimonial/persion-1.png'
import persion_2 from './Assets/img/testimonial/persion-2.png'
import persion_3 from './Assets/img/testimonial/persion-3.png'

const Testimonial = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    // vertical: true,
  };
  return (
    <div>
      <footer>
        <div className="container pt-3 pb-3">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <div className="heading">
                <h3>what people are saying</h3>
              </div>
              <Slider {...settings}>
                <div>
                  <div className="para">
                    <p>
                      I didn’t know that we can actually Win Real Money by playing
                      games just by using some skills at the comfort of your
                      place & time. Highly Recommended Platform!
                    </p>
                  </div>
                  <div className="person">
                    <div className="content">
                      <p>Parth Kapoor</p>
                      <span>Gold Badger Holder</span>
                      {/* <span> katnkrow studios</span> */}
                    </div>
                    <img src={persion_1} alt="" />
                  </div>
                </div>
                <div>
                  <div className="para">
                    <p>
                      The best part about Game Pitara is the range of Las Vegas
                      style live Casino games available plus they provide you
                      exciting offers & rewards on each Level Up
                    </p>
                  </div>
                  <div className="person">
                    <div className="content">
                      <p>Jenny Writes</p>
                      <span>Diamond Badge Holder</span>
                      {/* <span> katnkrow studios</span> */}
                    </div>
                    <img src={persion_2} alt="" />
                  </div>
                </div>
                <div>
                  <div className="para">
                    <p>
                      Best Online Betting Experience as I can withdraw my winning on time,
                      money is credited instantly to my wallet. Wonderful Experience so far.
                      Supportive Customer Service. Safe, Legit & Trustworthy online betting platform.
                    </p>
                  </div>
                  <div className="person">
                    <div className="content">
                      <p>Nitin Khanna</p>
                      <span>Bronze Badge Holder</span>
                      {/* <span> katnkrow studios</span> */}
                    </div>
                    <img src={persion_3} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 p-0">
              <form action="">

                <div className="row register_with_us pt-2 pb-2">
                  <div className="heading w-100">
                    <h3>register with us</h3>
                  </div>
                  <div className="form-group col-sm-6 p-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group col-sm-6 p-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group col-sm-6 p-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group col-sm-6 p-1">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="form-group btns p-1">
                    <button className="button_submit" type="button">submit</button>
                  </div>
                  <div className="form-group btns">
                    <Link to="" className="login_btn">Login</Link>
                    <a href="#!">
                      <img src={facebook} alt="" />
                    </a>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonial;

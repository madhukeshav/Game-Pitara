import React from "react";
import Slider from "react-slick";
import Winners from "./Winners";
import { winnersData } from "./WinnersData";
import video from "./Assets/img/winning/Gp_Website_video.mp4";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import Vector_Smart_Object from "./Assets/img/home/Vector_Smart_Object.png";
import Vector_Smart_Object_2 from "./Assets/img/home/Vector_Smart_Object-2.png";
import Vector_Smart_Object_3 from "./Assets/img/home/Vector_Smart_Object-3.png";

import VideoFooter from "./Assets/img/home/video-footer.gif";
import PaymentList from "./Assets/img/home/payment/paymentList.png";
import Carousel from 'react-bootstrap/Carousel'
const WinnersList = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    vertical: true
  };
  return (
    <div>

      <div className="winning winning2" id={props.classType}>
        <div className="container ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className="video">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 video_section">
                    {/* <iframe src={video} title="testing " className="video_frame" /> */}
                    <video className="trailerVideo" width="100%" height="100%" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 content_section">
                    <div className="video__content pt-4">
                      <h3>more than games</h3>
                      <span>
                        In Gamepitara, <br /> We offer more than just games..
                      </span>
                      <p>
                        Gamepitara is home to the best online casino,
                        sports betting and entertainment games.<br /><br /><br /><br />
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mobilep-0">
                    <div className="videoSectionFooter">
                      <img src={VideoFooter} alt="start winner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pl-5 mobilep-0">
              <div className="row threeTrust">
                <div className="col-sm-4 threeTrust-col">
                  <div className="threeTrust__section">
                    <img src={Vector_Smart_Object} alt="3 security" />
                    <p className="threeTrust__section__p1">Instant</p>
                    <p className="threeTrust__section__p2">Withdrawal</p>
                  </div>
                </div>
                <div className="col-sm-4 threeTrust-col">
                  <div className="threeTrust__section">
                    <img src={Vector_Smart_Object_2} alt="3 security" />
                    <p className="threeTrust__section__p1">Instant</p>
                    <p className="threeTrust__section__p2">Withdrawal</p>
                  </div>
                </div>
                <div className="col-sm-4 threeTrust-col">
                  <div className="threeTrust__section">
                    <img src={Vector_Smart_Object_3} alt="3 security" />
                    <p className="threeTrust__section__p1">Instant</p>
                    <p className="threeTrust__section__p2">Withdrawal</p>
                  </div>
                </div>
              </div>
              <div className="row paymentAccept">
                <h3 className="paymentAccept__heading">Payments and withdrawals</h3>
                <div className="paymentAccept__list">
                  <img src={PaymentList} alt="Payment list" />
                </div>
              </div>
            </div>

            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 desktop_only p-0">
              {!props.conditionRender ? (
                <div className="winnings__days">
                  <h3>winnings of the day</h3>
                  <Slider {...settings}>
                    {winnersData.map((winner, index) => (
                      <Winners
                        key={index}
                        img={winner.winnerImg}
                        name={winner.winnerName}
                        price={winner.winnerPrice}
                        game={winner.winnerGame}
                      />
                    ))}
                  </Slider>
                </div>
              ) : (
                <div className="whyus">
                  <div className="heading">
                    <h3>why game pitara?</h3>
                  </div>
                  <div className="img">
                    <div className="row">
                      <div className="col-6">
                        <div className="img__in">
                          <img src={whyImg1} className="img-fluid" alt="" />
                          <div className="title">
                            <span>innovative products</span>
                            <h4>design to entertained</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="img__in">
                          <img src={whyImg2} className="img-fluid" alt="" />
                          <div className="title">
                            <span>licensed &</span>
                            <h4>trusted</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="img__in">
                          <img src={whyImg3} className="img-fluid" alt="" />
                          <div className="title">
                            <span>Mobile, dekstop.</span>
                            <h4>friendly</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="img__in">
                          <img src={whyImg4} className="img-fluid" alt="" />
                          <div className="title">
                            <span>award winning</span>
                            <h4>content</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersList;

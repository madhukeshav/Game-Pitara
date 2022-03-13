import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import LoginSignup from "./LoginSignup";
import { useStateValue } from './StateProvider'
import search_icon from './Assets/img/cards/search_icon.png'
import { GameIndividual } from "./componentsCollection";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import Slider from "react-slick";
import Winners from "./Winners";
import { winnersData } from "./WinnersData";

// All Image
import all1_img from './Assets/img/home_game/image/Lotto_0000_Instant_Win.jpg'
import all2_img from './Assets/img/home_game/image/Ezugi_0001.jpg'
import all3_img from './Assets/img/home_game/image/Vivo_0002_Gaming_2.jpg'
import all4_img from './Assets/img/home_game/image/One_0003_Touch.jpg'
import all5_img from './Assets/img/home_game/image/Golden_0004_Race.jpg'
import all6_img from './Assets/img/home_game/image/Betradar_0005.jpg'
import all7_img from './Assets/img/home_game/image/Bet_0006_Games_tv.jpg'
import all8_img from './Assets/img/home_game/image/XPG_0007_Gaming.jpg'
import all9_img from './Assets/img/home_game/image/Superspade_0008_Gaming.jpg'
import all10_img from './Assets/img/home_game/image/Vivo_0009_Gaming.jpg'

// Poker
import Poker_0000_XPG_texas_holdem_Poker_img from './Assets/img/poker/poker_img/image/Poker_0000_XPG_texas_holdem_Poker.jpg'
import Poker_0001_VivoGaming_CasinoHoldem_img from './Assets/img/poker/poker_img/image/Poker_0001_VivoGaming_CasinoHoldem.jpg'
import Poker_0002_Superspade_Gaming_3_card_Poker_img from './Assets/img/poker/poker_img/image/Poker_0002_Superspade_Gaming_3_card_Poker.jpg'
import Poker_0003_Spadegaming_Win_Three_Cards_Poker_img from './Assets/img/poker/poker_img/image/Poker_0003_Spadegaming_Win_Three_Cards_Poker.jpg'

// Roulette
import Roulette_0000_Yggdrasil_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0000_Yggdrasil_Roul.jpg'
import Roulette_0001_XPG_Roulette2_img from './Assets/img/roulette/roulette_game/image/Roulette_0001_XPG_Roulette2.jpg'
import Roulette_0002_XPG_Roulett_img from './Assets/img/roulette/roulette_game/image/Roulette_0002_XPG_Roulette.jpg'
import Roulette_0003_Vivo_Roulette_partners_img from './Assets/img/roulette/roulette_game/image/Roulette_0003_Vivo_Roulette_partners.jpg'

//Football
import sports_0000_Yggdrasil_Football_Glory_img from './Assets/img/sports/sports_img/Football/Image/0000_Yggdrasil_Football_Glory.jpg'
import sports_0001_RTGSLOTS_Football_Fortunes_img from './Assets/img/sports/sports_img/Football/Image/0001_RTG_SLOTS_Football_Fortunes.jpg'
import sports_0002_RTGSLOTS_Football_Frenzy_img from './Assets/img/sports/sports_img/Football/Image/0002_RTG_SLOTS_Football_Frenzy.jpg'
import sports_0003_Endorphina_Football_img from './Assets/img/sports/sports_img/Football/Image/0003_Endorphina_Football.jpg'

// Blackjack
import blackjack_img from './Assets/img/cards/blackjack/Platiplus-BJ.jpg'
import Ezugi_BJ_Auto_split_img from './Assets/img/cards/blackjack/Ezugi-BJ-Auto-split.jpg'
import Evoplay_BJ_lucky_sevens_img from './Assets/img/cards/blackjack/Evoplay-BJ-lucky-sevens.jpg'
import Ezugi_Live_Bj_img from './Assets/img/cards/blackjack/Ezugi-Live-Bj.jpg'


// Teen Pati
import Teen_Patti_0000_XPG_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0000_XPG_tp.jpg'
import Teen_Patti_0001_Ezugi_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0001_Ezugi.jpg'
import Teen_Patti_0002_Evoplay_Pokerr_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0002_Evoplay_Pokerr_tp.jpg'
import Teen_Patti_0003_Superspade_2020_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0003_Superspade_2020_tp.jpg'


//Race
import sports_0000_Tomhorn_Pandas_Run_img from './Assets/img/sports/sports_img/Race/Image/0000_Tomhorn_Pandas_Run.jpg'
import sports_0001_Yggdrasil_Reef_Run_img from './Assets/img/sports/sports_img/Race/Image/0001_Yggdrasil_Reef_Run.jpg'
import sports_0002_Betradar_Virtual_Horse_Classis_img from './Assets/img/sports/sports_img/Race/Image/0002_Betradar_Virtual_Horse_Classis.jpg'
import sports_0003_Betrada_Virtual_Dog_Racing_img from './Assets/img/sports/sports_img/Race/Image/0003_Betrada_Virtual_Dog_Racing.jpg'


import LowerBanner_1 from "./Assets/img/home/lowerBanner/lowerBanner_1.gif"
import LowerBanner_2 from "./Assets/img/home/lowerBanner/lowerBanner_2.gif"



import Carousel from 'react-bootstrap/Carousel'





const Why = (props) => {
  const [status, setStatus] = useState("open");
  const [open, setOpen] = useState("");
  const [text, setText] = useState("sign in");
  const handleClose = () => {
    switch (status) {
      case "open":
        setOpen("");
        setStatus("close");
        break;
      case "close":
        setOpen("");
        setStatus("open");
        break;
    }
  };
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
  const [{ signature }, dispatch] = useStateValue();
  console.log(signature);
  const handleGames = async (e) => {
    let getGames = {
      GameUUId: e.target.dataset.id,
      PlayerId: "ANU001",
      PlayerName: "Anurag",
      Currency: "INR",
      SessionId: "S001"
    }
    await fetch("https://api.gamepitara.com/api/LaunchGame", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getGames)
    }).then(result => {
      result.json().then(res => {
        let result = res;
        let auth = localStorage.getItem('auth')
        console.log(auth == null);
        if (auth == null) {
          setOpen("active")
        } else {
          window.open(result.url, '_blank')
        }

      })
    })
  }
  return (

    <div className="why" id="afterTop">

      <div className="container-fluid">
        <div className="winning whyWinner lowerBanner">
          <div className="container-fluid mb-3">
            <div className="row lowerBanner__row">
              <div className="col-xs-8 col-sm-8 col-md-12 col-lg-5 col-xl-5 pl-0 mb-3 mobilep-0 lowerBanner__mobile">
                <div className="">
                  <Carousel>
                    <Carousel.Item className="home-winnerSlider home-innerwinnerSlider_img_1 lowerBanner__slider" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item className="home-winnerSlider home-innerwinnerSlider_img_2 lowerBanner__slider" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item className="home-winnerSlider home-innerwinnerSlider_img_3 lowerBanner__slider" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  >
                  </Carousel>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-12 col-lg-2 col-xl-2 pl-0 mb-3 mobilep-0 lowerBannerIMG__mobile">
                <img src={LowerBanner_2} alt="baneer" className="lowerBanner__singleGame" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pr-0 pl-0 mb-3 mobilep-0 desktop_only">
                <img src={LowerBanner_1} alt="baneer" className="lowerBanner__doubleGame" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 why_section">
            <div className="tabs">
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <div className="all row">
                    <GameIndividual GameImg={all9_img} GameName="Live Roulette" dataid="2a8f0bff1c0dfc6dc8482accd4a77d36a49e9255" />
                    <GameIndividual GameImg={all1_img} GameName="Lotto Instant Win" dataid="e732b21952e08d667c28c73afb6a3a0dfe5bc5ee" />
                    <GameIndividual GameImg={all2_img} GameName="Live Casino Games" dataid="5ffe9c022755838add76ff18161fbb83a8dade46" />
                    <GameIndividual GameImg={all3_img} GameName="Unlimited Blackjack" dataid="802e0279619f46a9250a134e40e795606f493329" />
                    <GameIndividual GameImg={all4_img} GameName="Lets Play Poker" dataid="b753a3c19b2cd72ad9b9cd0399b3f2440f0331d4" />
                    <GameIndividual GameImg={all5_img} GameName="Bet On Racing Game" dataid="ea598b081c71ad7de84f13cc05259550164548e8" />
                    {/* <GameIndividual GameImg={all6_img} GameName="Bet On Virtual Sports" dataid="7e13c1bfe0784ac5d6bee307a2285e9414274fac" />
                    <GameIndividual GameImg={all7_img} GameName="Instant Wins" dataid="42436349476ea250a5259f5dcf7a0bd165695c66" />
                    <GameIndividual GameImg={all8_img} GameName="Cards With XPG" dataid="42436349476ea250a5259f5dcf7a0bd165695c66" />
                    <GameIndividual GameImg={all10_img} GameName="Live Card Games" dataid="0be9c97134bb4189d90664e142286a60" />
                    <GameIndividual GameName="XPG" GameImg={Roulette_0002_XPG_Roulett_img} dataid="f354478aa85477dac9d9097b6a3b3648724b79bd" />
                    <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0003_Vivo_Roulette_partners_img} dataid="e88a563aed2cc6ddbfc263587def1d6d0e0eb145" /> */}
                  </div>
                </Tab>
                <Tab eventKey="poker" title="Poker">
                  <div className="all row">
                    <GameIndividual GameName="XPG" GameImg={Poker_0000_XPG_texas_holdem_Poker_img} dataid="0aa8200a9a68d4a5d164c2cf53735603f8c938ba" />
                    <GameIndividual GameName="Vivo Gaming" GameImg={Poker_0001_VivoGaming_CasinoHoldem_img} dataid="e864e7d293376c830c58d7ddddf9983f8d852718" />
                    <GameIndividual GameName="Superspade Gaming" GameImg={Poker_0002_Superspade_Gaming_3_card_Poker_img} dataid="46398a2e27f4c8cb06d1371f8782f1cbc6415c88" />
                    <GameIndividual GameName="Superspade Gaming" GameImg={Poker_0003_Spadegaming_Win_Three_Cards_Poker_img} dataid="fd43123768f998a19f8627693ae009460d036da8" />
                  </div>
                </Tab>
                <Tab eventKey="Roulette" title="Roulette">
                  <div className="all row">
                    <GameIndividual GameName="Yggdrasil" GameImg={Roulette_0000_Yggdrasil_Roul_img} dataid="58bd9c22f7338410ad392ce45e3b8ab0ae88d9f8" />
                    <GameIndividual GameName="XPG" GameImg={Roulette_0001_XPG_Roulette2_img} dataid="5f553c8de9f853a222ead7f726f227e88f2381c0" />
                    <GameIndividual GameName="XPG" GameImg={Roulette_0002_XPG_Roulett_img} dataid="f354478aa85477dac9d9097b6a3b3648724b79bd" />
                    <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0003_Vivo_Roulette_partners_img} dataid="e88a563aed2cc6ddbfc263587def1d6d0e0eb145" />
                  </div>
                </Tab>
                <Tab eventKey="Football" title="Football">
                  <div className="all row">
                    <GameIndividual GameName="Yggdrasil" GameImg={sports_0000_Yggdrasil_Football_Glory_img} dataid="9fd6353482f2dacb7955c269f42a9e662adf4b3b" />
                    <GameIndividual GameName="RTG SLOTS" GameImg={sports_0001_RTGSLOTS_Football_Fortunes_img} dataid="7c35b0224eb58d770fe3ac3aa280a5d7" />
                    <GameIndividual GameName="RTG SLOTS" GameImg={sports_0002_RTGSLOTS_Football_Frenzy_img} dataid="b8660244ad1dc13770c62f46d4977b37" />
                    <GameIndividual GameName="Endorphina" GameImg={sports_0003_Endorphina_Football_img} dataid="5111b171119b9d8dddf0a7d20f013aab936fad6e" />
                  </div>
                </Tab>
                <Tab eventKey="Blackjack" title="Blackjack">
                  <div className="all row">
                    <GameIndividual GameName="Platiplus" GameImg={blackjack_img} dataid="aad60e43266b22cf533ed73c720519f665d7fc0d" />
                    <GameIndividual GameName="Evoplay" GameImg={Evoplay_BJ_lucky_sevens_img} dataid="3b98aa535d4f492eaa2fe04b7d826105" />
                    <GameIndividual GameName="Ezugi" GameImg={Ezugi_BJ_Auto_split_img} dataid="802e0279619f46a9250a134e40e795606f493329" />
                    <GameIndividual GameName="Ezugi" GameImg={Ezugi_Live_Bj_img} dataid="0e9e90471848524af0a2eb4ae1f7ca794655b452" />
                  </div>
                </Tab>
                <Tab eventKey="Teenpatti" title="Teenpatti">
                  <div className="all row">
                    <GameIndividual GameName="XPG" GameImg={Teen_Patti_0000_XPG_tp_img} dataid="42436349476ea250a5259f5dcf7a0bd165695c66" />
                    <GameIndividual GameName="Ezugi" GameImg={Teen_Patti_0001_Ezugi_img} dataid="cac88d6f80950224007a2d90ad58d5f8c991b72d" />
                    <GameIndividual GameName="Evoplay" GameImg={Teen_Patti_0002_Evoplay_Pokerr_tp_img} dataid="78f5c97bca0e47ebbcb04edc48ae3e2e" />
                    <GameIndividual GameName="Superspade" GameImg={Teen_Patti_0003_Superspade_2020_tp_img} dataid="733b0d8df3021e0c5c2f78271429c58cc9979348" />
                  </div>
                </Tab>
                <Tab eventKey="Race" title="Race">
                  <div className="all row">
                    <GameIndividual GameName="Tomhorn" GameImg={sports_0000_Tomhorn_Pandas_Run_img} dataid="23ce7d3153038e5cf57d936b41fb9cc575cf1791" />
                    <GameIndividual GameName="Yggdrasil" GameImg={sports_0001_Yggdrasil_Reef_Run_img} dataid="7f9ed560fa456bc3c2d096681817b8d69138b2b4" />
                    <GameIndividual GameName="Betradar" GameImg={sports_0002_Betradar_Virtual_Horse_Classis_img} dataid="7e13c1bfe0784ac5d6bee307a2285e9414274fac" />
                    <GameIndividual GameName="Betradar" GameImg={sports_0003_Betrada_Virtual_Dog_Racing_img} dataid="4b8c14b0b8762ea6680cdaf9bad8d8d1579d6d4a" />
                  </div>
                </Tab>
              </Tabs>
              <div className="search_tabs">
                <input className="btn search_input" placeholder="Search your game" />
                <img src={search_icon} className="search_icon" alt="search" />
              </div>
            </div>
          </div>

        </div>
        <div className="winning whyWinner">
          <div className="container container-custom">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pl-0 mobilep-0">
                <div>
                  <Carousel>
                    <Carousel.Item className="home-winnerSlider home-winnerSlider_img_1" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item className="home-winnerSlider home-winnerSlider_img_2" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  >
                    {/* <Carousel.Item className="home-winnerSlider home-winnerSlider_img_3" >
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item  > */}
                  </Carousel>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 pl-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="loginsignup" id={open}>
        <div className="heading">
          <h3>{text}</h3>
          <i className="fa fa-close" onClick={handleClose}></i>
        </div>
        <LoginSignup sign={text === "sign in"} signup={text === "sign up"} />
      </div>
    </div >
  );
};

export default Why;

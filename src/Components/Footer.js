import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import logo from "./Assets/img/logo.png";
import logo_footer from './Assets/img/Logo-footer.svg'
import social from "./Assets/img/footer/social.png";
import Facebook from "./Assets/img/socialicons/facebook.png";
import InstaGram from "./Assets/img/socialicons/instagram.png";
import Telegram from "./Assets/img/socialicons/telegram.png";
import email from "./Assets/img/socialicons/email.png";
import twitter from "./Assets/img/socialicons/twitter.png";
import pinterest from "./Assets/img/socialicons/pinterest.png";
import whatsapp from "./Assets/img/socialicons/whatsapp.png";
import youtube from "./Assets/img/socialicons/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="btm__footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <div className="foot">
                <img className="footer-firstWidget" src={logo} alt="Game Pitara Logo" />
                <p>
                  India Best Online Casino <br /> Slot & Live Games
                </p>
                <p>18+ Be Responsible</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="foot">
                <h3>menu</h3>
                <ul>
                  <li>
                    <Link to="/cards">Live Casino Game</Link>
                  </li>
                  <li>
                    <Link to="/roulette">Roulette Game</Link>
                  </li>
                  <li>
                    <Link to="/pocker">Card Game</Link>
                  </li>
                  <li>
                    <Link to="/fastgame">Fast Game</Link>
                  </li>
                  <li>
                    <Link to="/sports">Sports</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="foot">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <Link to="/privacy-policy">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privicy Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">About US</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Contact US</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="foot last">
                <img src={logo_footer} alt="Logo" />
                <p className="mb-2">connect with us</p>
                <img className="socialMedia img-fluid" src={social} alt="social handel" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_footer">
        <div className="container">
          <p>© 2021 Game Pitara. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

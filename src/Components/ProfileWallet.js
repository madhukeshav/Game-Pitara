import React, { useState, useEffect } from "react";
import LoggedHeader from "./LoggedHeader";
import { Tab, Row, Nav } from "react-bootstrap";
import walletWhite from "./Assets/img/wallet/wallet-white.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import Wallet from "./Wallet";
import dummyprofile from "./Assets/img/dummyprofile.png";
import Message from './Message';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "./Footer";

const ProfileWallet = () => {
  const [user, setUser] = useState();

  const getProfile = () => {
    fetch("https://api.gamepitara.com/api/v1/users/get-profile-details", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Sender": "155145",
        "Authorization": `Token token=${localStorage.getItem("auth")
          }`
      },
    }).then(result => {
      if (result.status === 200) {
        result.json().then(result => {
          setUser(result)
          localStorage.setItem("userBalance", result.account_balance)
        })
      } else {
        // handleLogout();
      }
    })
  }

  useEffect(() => {
    getProfile();
  }, [])


  return (
    <div>
      <LoggedHeader />
      {/* banner */}
      <div className="banner">
        {/* <img src={dbBanner} className="img-fluid" alt="" /> */}
        <div className="container">
          <div className="mainTabs">
            <div className="abs">
              <Tab.Container id="left-tabs-example" defaultActiveKey="wallet">
                <Row>
                  <div className="col-sm-3">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="wallet">
                          <img src={walletWhite} alt="" />
                          <span>Wallet</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="message">
                          <img src={messageYellow} alt="" />
                          <span>message</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="profile">
                          <img src={profileYellow} alt="" />
                          <span>Profile</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="account">
                          <img src={accountYellow} alt="" />
                          <span>account</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="col-sm-8 mx-auto">
                    <Tab.Content>
                      <Tab.Pane eventKey="wallet">
                        <Wallet />
                      </Tab.Pane>
                      <Tab.Pane eventKey="message">
                        <Message />
                      </Tab.Pane>
                      <Tab.Pane eventKey="profile">
                        <div className="profile">
                          <div className="ppicture">
                            <img src={dummyprofile} alt="" />
                            <span>Change Picture</span>
                            <p>remove</p>
                          </div>
                          <div className="updates">

                            <div className="item">
                              <span>username</span>
                              <span>{user?.username ? user.username : "Username"}</span>
                              <i className="fa fa-check text-success"></i>
                            </div>
                            <div className="item">
                              <span>email</span>
                              <span>{user?.email ? user.email : "Username"}</span>
                              <i className="fa fa-check text-success"></i>
                            </div>
                            {/* <div className="item">
                              <span>phone number</span>
                              <i className="fa fa-pencil-square-o" ></i>
                            </div> */}
                            <div className="item">
                              <span>D.O.B</span>
                              <span>{user?.date_of_birth ? user.date_of_birth : "Username"}</span>
                              <i className="fa fa-check text-success"></i>
                            </div>
                            <div className="password">
                              <button type="button">Change Password</button>
                            </div>
                          </div>
                          {/* updates */}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
      <div className="background"></div>

      <Footer />
    </div>
  );
};

export default ProfileWallet;

import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Accordion, Card } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import logo_footer from './Assets/img/Logo-footer.svg'
import { Link } from "react-router-dom";
import rp from "./Assets/img/rp.png";
import rs from "./Assets/img/rs.png";
import plus from "./Assets/img/plus.png";
import walletYellow from "./Assets/img/wallet/wallet-icon.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import users from "./Assets/img/dummyprofile.png";
import home from './Assets/img/icons/home.png'
import cards from './Assets/img/icons/cards.png'
import jackpot from './Assets/img/icons/jackpot.png'
import livedealer from './Assets/img/icons/livedealer.png'
import poker from './Assets/img/icons/poker.png'
import roullete from './Assets/img/icons/roullete.png'
import Sports from './Assets/img/icons/Sports.png'
import Slots from './Assets/img/icons/slots.png'
import logoWithoutName from './Assets/img/Logo-footer.svg'


const getIsMobile = () => window.innerWidth <= 768;

const LoggedHeader = () => {
  let history = useHistory();
  const ref = useRef();
  const [user, setUser] = useState();
  const [active, setActive] = useState("")
  const [profile, setProfile] = useState({})
  const [accountBalance, setAccountBalance] = useState("0.00")
  const [clickBody , setClickBody] = useState(false);

  // let auth = localStorage.getItem("auth")

  const handleOpen = () => {
    setActive("active")
  }

  //handleClose
  const handleClose = () => {
    setActive("")
  }

  const redirectPage = (value) => {
    localStorage.setItem("pageName", value);
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push("/")
    window.location.reload()
  }
  const checkAuth = () => {
    if (localStorage.getItem("auth")) {
    } else {
      history.push("/")
      handleLogout();
    }
  }

  
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

  const getBalance = () => {
    let getAccountBalance = localStorage.getItem("userBalance") ? localStorage.getItem("userBalance") : 0.00
    let getAccountBalanceRound = parseInt(getAccountBalance).toFixed(2)
    setAccountBalance(getAccountBalanceRound)
  }

  useEffect(() => {
    checkAuth()
    getProfile();
    getBalance();
    return () => {
        document.body.classList.remove('open')
    }
    
  }, [])

  useEffect(() => {
    const x = document.querySelector('.userDropdown').classList.contains('show')
    console.log(x)
    if(clickBody){
      document.body.classList.add('open')
    }else
      document.body.classList.remove('open')
  },[clickBody])

  const onClickHandler = () => {
    ref.current.firstChild.click();
    if(clickBody)
      setClickBody(false)
    else
      setClickBody(true)
  }

  return (
    <header>
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" className="logedin_logo desktop_only" />
            </Link>
            <Link to="/" alt="logo" className="logedin_logo mobile_only">
              <img src={logoWithoutName} alt="logo" />
            </Link>
            {/* <div className="barnotification">
              <button onClick={handleOpen}>
                <i className="fa fa-bars"></i>
              </button>
              <button>
                <i className="fa fa-bell"></i>
              </button>
            </div> */}

          </Navbar.Brand>
          <div className="mobile_only ml-auto mr-1">
            <Nav className="ml-auto">
              <Nav.Link>
                <div className="balanceOnHeader">
                  <img src={rs} alt="" />
                  <span>{user?.account_balance}</span>
                  <Link to="/wallet">
                    <img src={plus} alt="add money" />
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-flex mobileUserName align-items-center">
            <h4 className='d-block d-sm-none'>{user?.username ? user.username : "User"}</h4>
            <Navbar.Toggle onClick={onClickHandler} aria-controls="offcanvasNavbar" />
          </div>
          <Navbar.Collapse id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Nav className="ml-auto">
              <Nav.Link className="desktop_only">
                <Link to="/">
                  <img src={home} alt="home" />
                  home
                </Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <Link to="/cards">
                  <img src={cards} alt="home" />
                  Cards
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="">
                <img src={jackpot} alt="home"/>
                jackpot games
                </Link>
              </Nav.Link> */}
              <Nav.Link className="desktop_only">
                <Link to="/roulette">
                  <img src={roullete} alt="home" />
                  roulette
                </Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <Link to="/pocker">
                  <img src={poker} alt="home" />
                  poker
                </Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <Link to="/fastgame">
                  <img src={jackpot} alt="Fast Game" />
                  Fast Games
                </Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <Link to="/sports">
                  <img src={Sports} alt="Sports" />
                  Sports
                </Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <img src={livedealer} alt="home" />
                <Link to="">live dealers</Link>
              </Nav.Link>
              <Nav.Link className="desktop_only">
                <Link to="/sports">
                  <img src={Slots} alt="Sports" />
                  Slots
                </Link>
              </Nav.Link>
              {/* <Nav.Link className="wallet">
                <img src={rp} alt="" />
                <Link to="">1500</Link>
              </Nav.Link> */}
              <Nav.Link className="desktop_only">
                <div className="balanceOnHeader">
                  <img src={rs} alt="" />
                  <span>{user?.account_balance}</span>
                  <Link to="/wallet">
                    <img src={plus} alt="add money" />
                  </Link>
                </div>
              </Nav.Link>
              {/* <NavDropdown className="userDropdown" title="user" id="basic-nav-dropdown"> */}
              <NavDropdown ref={ref} className={`userDropdown`} title={user?.username ? user.username : "User"} id="basic-nav-dropdown">
                <Nav className="d-flex m-0 d-sm-none">
                  <Nav.Link>
                    <Link to="/">
                      <img src={home} alt="home" />
                      home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/cards">
                      <img src={cards} alt="home" />
                      Cards
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/roulette">
                      <img src={roullete} alt="home" />
                      roulette
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/pocker">
                      <img src={poker} alt="home" />
                      poker
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/fastgame">
                      <img src={jackpot} alt="Fast Game" />
                      Fast Games
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/sports">
                      <img src={Sports} alt="Sports" />
                      Sports
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <img src={livedealer} alt="home" />
                    <Link to="">live dealers</Link>
                  </Nav.Link>
                  <Nav.Link className="desktop_only">
                    <Link to="/sports">
                      <img src={Slots} alt="Sports" />
                      Slots
                    </Link>
                  </Nav.Link>
                </Nav>
                <NavDropdown.Divider className="d-block d-sm-none" />
              
                <NavDropdown.Item onClick={redirectPage("wallet")}>
                  <Link to="/wallet">
                    <img src={walletYellow} alt="" />
                    Wallet
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={redirectPage("wallet")}>
                  <Link>
                    <img src={messageYellow} alt="" /> Messages
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="wallet/#profile">
                    <img src={profileYellow} alt="" />
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet">
                    <img src={accountYellow} alt="" />
                    account
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/" onClick={handleLogout}>
                    <i className="fa fa-power-off"></i>
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>


        </div>
      </Navbar>
      <Navbar className="mobileNavBottom_nav mobile_only">
        <Navbar.Collapse className="mobileNavBottom">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">
                <img src={home} alt="home" />
                home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cards">
                <img src={cards} alt="home" />
                Cards
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
                <Link to="">
                <img src={jackpot} alt="home"/>
                jackpot games
                </Link>
              </Nav.Link> */}
            <Nav.Link>
              <Link to="/roulette">
                <img src={roullete} alt="home" />
                roulette
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pocker">
                <img src={poker} alt="home" />
                poker
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/fastgame">
                <img src={jackpot} alt="Fast Game" />
                Fast Games
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sports">
                <img src={Sports} alt="Sports" />
                Sports
              </Link>
            </Nav.Link>
            <Nav.Link>
              <img src={livedealer} alt="home" />
              <Link to="">live dealers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sports">
                <img src={Slots} alt="Sports" />
                Slots
              </Link>
            </Nav.Link>
            {/* <Nav.Link className="wallet">
                <img src={rp} alt="" />
                <Link to="">1500</Link>
              </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bars" id={active}>
        <div className="heading">
          {/* <img src={profile?.profileImg == undefined ? profile.profileImg : users} alt="" /> */}
          {/* <span>{!profile.username ? "user" : profile.username}</span> */}
          <i className="fa fa-close" onClick={handleClose}></i>
        </div>
        <div className="bars__body">
          <div className="list">
            <Accordion eventKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h3><img src={walletYellow} alt="" /> <span>Wallet</span> <i className="fa fa-chevron-down"></i></h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Link to="/wallet">statement</Link>
                    <Link to="/wallet">deposit</Link>
                    <Link to="/wallet">withdraw</Link>
                    <Link to="/wallet">referral</Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <h3><img src={messageYellow} alt="" /> <span>message</span> <i className="fa fa-chevron-down"></i></h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Link to="/wallet">statement</Link>
                    <Link to="/wallet">deposit</Link>
                    <Link to="/wallet">withdraw</Link>
                    <Link to="/wallet">referral</Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <h3><img src={profileYellow} alt="" /> <span>profile</span></h3>
            <h3><img src={accountYellow} alt="" /> <span>Account</span></h3>
          </div>
        </div>
      </div>
    </header >
  );
};

export default LoggedHeader;

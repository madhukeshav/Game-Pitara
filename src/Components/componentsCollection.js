import React, { useState } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap'
import search_icon from './Assets/img/cards/search_icon.png'
import LoginSignup from "./LoginSignup";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PageLoaderImg from "./Assets/img/pageLoader.gif";


// Banner
export const GameSection = (props) => {
    return (
        <div className="games__part">
            <div className="container">
                <div className="row">
                    <Tab.Container id="left-tabs-example" defaultActiveKey={props.defaultTab}>
                        <Row>
                            {props.children}
                        </Row>
                    </Tab.Container>

                </div>
            </div>
        </div>
    );
}

export const GameSidebar = (props) => {
    return (
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0">
            <Nav variant="pills" className="flex-column">
                {props.children}
            </Nav>
        </Col>
    )
}

export const GameSideBarItem = (props) => {
    return (
        <Nav.Item>
            <Nav.Link eventKey={props.sideItem}>
                <img src={props.ImgSrc} alt={props.sideItem} />
                {props.name}
            </Nav.Link>
        </Nav.Item>
    )
}


export const GameListSection = (props) => {
    return (
        <Col xs={10} sm={10} md={10} lg={10} xl={10} className="game_card_section">

            {props.children}
        </Col>
    )
}

export const GameList = (props) => {
    return (
        <Tab.Content>
            <Tab.Pane eventKey={props.TabName}>
                <div className="row Game_gridview">
                    {props.children}
                </div>
            </Tab.Pane>
        </Tab.Content>
    )
}

export const GameIndividual = (props, { image, scrollPosition }) => {
    const [status, setStatus] = useState("open");
    const [open, setOpen] = useState("");
    const [text, setText] = useState("sign in");
    const handleClose = () => {
        window.location.reload();
    }

    const handleGames = async (gaameId) => {
        let auth = localStorage.getItem('auth')
        if (auth) {
            let ApiData = {
                game_uuid: gaameId
            }

            await fetch("https://api.gamepitara.com/api/v1/games/launch", {
                method: "POST",
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Sender": "155145",
                    "Authorization": `Token token=${localStorage.getItem("auth")}`,
                },
                body: JSON.stringify(ApiData)

            }).then(result => {
                result.json().then(res => {
                    console.log(res);
                    let result = res
                    window.open(result.redirect_url, '_blank')
                })
            })
        } else {
            setOpen("active")
        }
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 gameImg_div" onClick={() => handleGames(props.dataid)}>
            <LazyLoadImage src={props.GameImg} data-id={props.dataid} scrollPosition={scrollPosition} alt={props.GameName} width="100%" className=" gameImg" effect="blur" />

            <p className="game_name_p">{props.GameName ? props.GameName : "Game Pitara"}</p>
            <h4 className="game_name_Play">Play Now</h4>

            <span >{props.GameImg.caption}</span>
            <div className="loginsignup" id={open}>
                <div className="heading">
                    <h3>{text}</h3>
                    <i className="fa fa-close" onClick={handleClose}></i>
                </div>
                <LoginSignup sign={text === "sign in"} signup={text === "Register Now"} />
            </div>
        </div>
    )
}



// Search bar
export const TopSearchBar = (props) => {
    return (
        <div className="row searchbar_div">
            <div className="col-xs-2 col-sm-2 col-ms-3 col-lg-3 col-xl-3 search_section3">
                <input type="text" className="form-control search_your_game" placeholder="Search your game" />
            </div>
            <div className="col-xs-3 col-sm-3 col-ms-3 col-lg-3 col-xl-3 search_section3">
                <select className="form-control search_dropdown">
                    <option>blackjack</option>
                    <option>Test 1</option>
                    <option>Test 2</option>
                    <option>Test 3</option>
                    <option>Test 4</option>
                </select>
            </div>
            <div className="col-xs-7 col-sm-7 col-ms-6 col-lg-6 col-xl-6 pr-0 search_div search_section3">
                <img src={search_icon} className="search_icon" alt="search" />
                <button className="btn search_btn">Search</button>
            </div>
        </div>
    )
}

//Document Section
export const DocumentSection = (props) => {
    return (
        <div className="privacy_content">
            <div className="privacy_row">
                {props.children}
            </div>
        </div>
    )
}


// Document heading

export const DocumentContent = (props) => {
    return (
        <div className="Doc_section" >
            <div className="privacy_row">
                <div className="doc_box">
                    {props.children}
                </div>
            </div>
        </div>
    )
}


//Document Paragraph
export const DocumentHeading = (props) => {
    return (
        <h5 className="doc_heading">
            {props.text}
        </h5>
    )
}

//Document Paragraph
export const DocumentPara = (props) => {
    return (
        <p className="doc_para">
            {props.text}
        </p>
    )
}

// Loader
export const PageLoader = (props) => {
    return (
        <div className="loader_section">
            <div className="page_div">
                <img src={PageLoaderImg} alt="Loading ..." />
            </div>
        </div>
    )
}
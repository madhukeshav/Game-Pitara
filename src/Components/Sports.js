import React from 'react'
import Header from './Header';
import banner from './Assets/img/sports/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Race_img from './Assets/img/sports/Icons/Race.png'
import Football_img from './Assets/img/sports/Icons/Football.png'
import Fishing_img from './Assets/img/sports/Icons/Fishing.png'
import Basketball_img from './Assets/img/sports/Icons/Basketball.png'
import Tennis_img from './Assets/img/sports/Icons/Tennis.png'

// Basketball
import sports_0000_Evoplay_Basketball_img from './Assets/img/sports/sports_img/Basketball/Image/0000_Evoplay_Basketball.jpg'
import sports_0001_Betradar_Basketball_League_img from './Assets/img/sports/sports_img/Basketball/Image/0001_Betradar_Basketball_League.jpg'

//Fishing
import sports_0000_Spadegaming_Fishing_War_img from './Assets/img/sports/sports_img/Fishing/Image/0000_Spadegaming_Fishing_War.jpg'
import sports_0001_Spadegaming_Fishing_God_img from './Assets/img/sports/sports_img/Fishing/Image/0001_Spadegaming_Fishing_God.jpg'

//Football
import sports_0000_Yggdrasil_Football_Glory_img from './Assets/img/sports/sports_img/Football/Image/0000_Yggdrasil_Football_Glory.jpg'
import sports_0001_RTGSLOTS_Football_Fortunes_img from './Assets/img/sports/sports_img/Football/Image/0001_RTG_SLOTS_Football_Fortunes.jpg'
import sports_0002_RTGSLOTS_Football_Frenzy_img from './Assets/img/sports/sports_img/Football/Image/0002_RTG_SLOTS_Football_Frenzy.jpg'
import sports_0003_Endorphina_Football_img from './Assets/img/sports/sports_img/Football/Image/0003_Endorphina_Football.jpg'
import sports_0004_Endorphina_Football_Superstar_img from './Assets/img/sports/sports_img/Football/Image/0004_Endorphina_Football_Superstar.jpg'
import sports_0005_Evoplay_Football_Manager_img from './Assets/img/sports/sports_img/Football/Image/0005_Evoplay_Football_Manager.jpg'
import sports_0006_Betradar_Virtual_Football_Asian_Cup_img from './Assets/img/sports/sports_img/Football/Image/0006_Betradar_Virtual_Football_Asian_Cup.jpg'
import sports_0007_Betradar_Virtual_Football_League_img from './Assets/img/sports/sports_img/Football/Image/0007_Betradar_Virtual_Football_League.jpg'
import sports_0008_Betradar_Virtual_Football_World_Cup_img from './Assets/img/sports/sports_img/Football/Image/0008_Betradar_Virtual_Football_World_Cup.jpg'

//Race
import sports_0000_Tomhorn_Pandas_Run_img from './Assets/img/sports/sports_img/Race/Image/0000_Tomhorn_Pandas_Run.jpg'
import sports_0001_Yggdrasil_Reef_Run_img from './Assets/img/sports/sports_img/Race/Image/0001_Yggdrasil_Reef_Run.jpg'
import sports_0002_Betradar_Virtual_Horse_Classis_img from './Assets/img/sports/sports_img/Race/Image/0002_Betradar_Virtual_Horse_Classis.jpg'
import sports_0003_Betrada_Virtual_Dog_Racing_img from './Assets/img/sports/sports_img/Race/Image/0003_Betrada_Virtual_Dog_Racing.jpg'
import sports_0004_Golden_Race_img from './Assets/img/sports/sports_img/Race/Image/0004_Golden_Race.jpg'
import sports_0005_Booming_Games_Snail_Race_img from './Assets/img/sports/sports_img/Race/Image/0005_Booming_Games_Snail_Race.jpg'

//Tennis
import sports_Betradar_Tennis_img from './Assets/img/sports/sports_img/Tennis/Image/Betradar_Tennis.jpg'



import LoggedHeader from './LoggedHeader';

const Roulette = () => {
    let auth;
    auth = localStorage.getItem("auth")
    return (
        <div className="cards">
            {
                !auth ? <Header /> : <LoggedHeader />
            }
            <div className="card__banner">
                <img src={banner} className="img-fluid" alt="" />
                <div className="container">
                    <div className="abs">
                        <h3>Sports</h3>
                        <span>Place Your Bets! Please</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="basketball">
                <GameSidebar>
                    <GameSideBarItem sideItem="basketball" name="Basketball" ImgSrc={Basketball_img} />
                    <GameSideBarItem sideItem="fishing" name="Fishing" ImgSrc={Fishing_img} />
                    <GameSideBarItem sideItem="football" name="Football" ImgSrc={Football_img} />
                    <GameSideBarItem sideItem="race" name="Race" ImgSrc={Race_img} />
                    <GameSideBarItem sideItem="tennis" name="Tennis" ImgSrc={Tennis_img} />

                </GameSidebar>

                <GameListSection>
                    <GameList TabName="basketball">
                        <GameIndividual GameName="Evoplay" GameImg={sports_0000_Evoplay_Basketball_img} dataid="5abf4e6f5e6d47199da5a68f18b92cd8" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0001_Betradar_Basketball_League_img} dataid="210767374188f284124e2287277eebb02319b306" />

                    </GameList>

                    <GameList TabName="fishing">
                        <GameIndividual GameName="Spade Gaming" GameImg={sports_0000_Spadegaming_Fishing_War_img} dataid="05bbbc22fs8397f0434145cd5498b5g7f901418f7" />
                        <GameIndividual GameName="Spade Gaming" GameImg={sports_0001_Spadegaming_Fishing_God_img} dataid="46db64427se391c74141bc4169d41cgcdeb646d3e" />

                    </GameList>

                    <GameList TabName="football">
                        <GameIndividual GameName="Yggdrasil" GameImg={sports_0000_Yggdrasil_Football_Glory_img} dataid="9fd6353482f2dacb7955c269f42a9e662adf4b3b" />
                        <GameIndividual GameName="RTG SLOTS" GameImg={sports_0001_RTGSLOTS_Football_Fortunes_img} dataid="7c35b0224eb58d770fe3ac3aa280a5d7" />
                        <GameIndividual GameName="RTG SLOTS" GameImg={sports_0002_RTGSLOTS_Football_Frenzy_img} dataid="b8660244ad1dc13770c62f46d4977b37" />
                        <GameIndividual GameName="Endorphina" GameImg={sports_0003_Endorphina_Football_img} dataid="5111b171119b9d8dddf0a7d20f013aab936fad6e" />
                        <GameIndividual GameName="Endorphina" GameImg={sports_0004_Endorphina_Football_Superstar_img} dataid="2575297d5cf30d71b856ca0cb4691d1523e07052" />
                        <GameIndividual GameName="Evoplay" GameImg={sports_0005_Evoplay_Football_Manager_img} dataid="748b2c62fab0584cdaf241f9c6ac82bb2b550b4e" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0006_Betradar_Virtual_Football_Asian_Cup_img} dataid="95f935f605f349d6b099d5eead7e9e6190acf4fe" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0007_Betradar_Virtual_Football_League_img} dataid="983ac973524bb89de898caae2bd3e45b5070b0eb" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0008_Betradar_Virtual_Football_World_Cup_img} dataid="6559d4864960e33b3d1622c3fd5f71565a663f00" />
                    </GameList>

                    <GameList TabName="race">
                        <GameIndividual GameName="Tomhorn" GameImg={sports_0000_Tomhorn_Pandas_Run_img} dataid="23ce7d3153038e5cf57d936b41fb9cc575cf1791" />
                        <GameIndividual GameName="Yggdrasil" GameImg={sports_0001_Yggdrasil_Reef_Run_img} dataid="7f9ed560fa456bc3c2d096681817b8d69138b2b4" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0002_Betradar_Virtual_Horse_Classis_img} dataid="7e13c1bfe0784ac5d6bee307a2285e9414274fac" />
                        <GameIndividual GameName="Betradar" GameImg={sports_0003_Betrada_Virtual_Dog_Racing_img} dataid="4b8c14b0b8762ea6680cdaf9bad8d8d1579d6d4a" />
                        <GameIndividual GameName="Golden Race" GameImg={sports_0004_Golden_Race_img} dataid="ea598b081c71ad7de84f13cc05259550164548e8" />
                        <GameIndividual GameName="Booming Games" GameImg={sports_0005_Booming_Games_Snail_Race_img} dataid="76f082e855519f652e65e99e9e2729b24a3acffa" />
                    </GameList>

                    <GameList TabName="tennis">
                        <GameIndividual GameName="Betradar" GameImg={sports_Betradar_Tennis_img} dataid="076f0994dc27688160259e3fca48cc674accdf20" />
                        <GameIndividual GameName="Betradar" GameImg={sports_Betradar_Tennis_img} dataid="72b3a93b8332e6191dc9c46da561027a6b582f54" />
                    </GameList>

                    <TopSearchBar />

                </GameListSection>
            </GameSection>

            <GameProvider />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Roulette

import React from 'react'
import Header from './Header';
import banner from './Assets/img/roulette/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import AllGame_icon from './Assets/img/roulette/Icons/all-games.png'
import American_roulette_icon from './Assets/img/roulette/Icons/american.png'
import European_roulette_icon from './Assets/img/roulette/Icons/european.png'

// Roulette
import Roulette_0000_Yggdrasil_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0000_Yggdrasil_Roul.jpg'
import Roulette_0001_XPG_Roulette2_img from './Assets/img/roulette/roulette_game/image/Roulette_0001_XPG_Roulette2.jpg'
import Roulette_0002_XPG_Roulett_img from './Assets/img/roulette/roulette_game/image/Roulette_0002_XPG_Roulette.jpg'
import Roulette_0003_Vivo_Roulette_partners_img from './Assets/img/roulette/roulette_game/image/Roulette_0003_Vivo_Roulette_partners.jpg'
import Roulette_0004_Vivo_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0004_Vivo_Roulette.jpg'
import Roulette_0005_VivoGaming_AutoRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0005_VivoGaming_AutoRoulette.jpg'
import Roulette_0006_Super_Spade_Games_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0006_Super_Spade_Games_Roul.jpg'
import Roulette_0007_Playson_Roul_High_img from './Assets/img/roulette/roulette_game/image/Roulette_0007_Playson_Roul_High.jpg'
import Roulette_0008_Playson_Roul_with_track_img from './Assets/img/roulette/roulette_game/image/Roulette_0008_Playson_Roul_with_track.jpg'
import Roulette_0009_Playson_Roul_low_img from './Assets/img/roulette/roulette_game/image/Roulette_0009_Playson_Roul_low.jpg'
import Roulette_0010_OneTouch_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0010_OneTouch_Roulette.jpg'
import Roulette_0011_EZU_roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0011_EZU_roulette.jpg'
import Roulette_0012_EZU_automaticroulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0012_EZU_automaticroulette.jpg'
import Roulette_0013_EZU_rouletteportomaso_img from './Assets/img/roulette/roulette_game/image/Roulette_0013_EZU_rouletteportomaso.jpg'
import Roulette_0014_Evoplay_European_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0014_Evoplay_European_Roul.jpg'
import Roulette_0015_EvoPlay_AmericanRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0015_EvoPlay_AmericanRoulette.jpg'
import Roulette_0016_BGaming_American_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0016_BGaming_American_Roulette.jpg'
import Roulette_0017_BGaming_European_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0017_BGaming_European_Roulette.jpg'
import Roulette_0018_BGaming_French_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0018_BGaming_French_Roulette.jpg'
import Roulette_0019_BetSoft_EuropeanRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0019_BetSoft_EuropeanRoulette.jpg'
import Roulette_0020_Betsoft_American_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0020_Betsoft_American_Roul.jpg'
import Roulette_0021_Belatra_American_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0021_Belatra_American_Roulette.jpg'
import Roulette_0022_Belatra_European_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0022_Belatra_European_Roulette.jpg'
import Roulette_0023_Amatic_img from './Assets/img/roulette/roulette_game/image/Roulette_0023_Amatic.jpg'
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
                        <h3>ROULETTE</h3>
                        <span>Place Your Bets! Please</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="allGame">
                <GameSidebar>
                    <GameSideBarItem sideItem="allGame" name="All Game" ImgSrc={AllGame_icon} />
                    <GameSideBarItem sideItem="american_roulette" name="American Roulette" ImgSrc={American_roulette_icon} />
                    <GameSideBarItem sideItem="european_roulette" name="European Roulette" ImgSrc={European_roulette_icon} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="allGame">
                        <GameIndividual GameName="Yggdrasil" GameImg={Roulette_0000_Yggdrasil_Roul_img} dataid="58bd9c22f7338410ad392ce45e3b8ab0ae88d9f8" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0001_XPG_Roulette2_img} dataid="5f553c8de9f853a222ead7f726f227e88f2381c0" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0002_XPG_Roulett_img} dataid="f354478aa85477dac9d9097b6a3b3648724b79bd" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0003_Vivo_Roulette_partners_img} dataid="e88a563aed2cc6ddbfc263587def1d6d0e0eb145" />
                        <GameIndividual GameName="Lobby" GameImg={Roulette_0004_Vivo_Roulette_img} dataid="3cf6443ea2d1c4501478ed2dcb431efb" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} dataid="d37c7f1a804092380a0ebe6396e748762a9a0c51" />
                        <GameIndividual GameName="Superspade Game" GameImg={Roulette_0006_Super_Spade_Games_Roul_img} dataid="2a8f0bff1c0dfc6dc8482accd4a77d36a49e9255" />
                        <GameIndividual GameName="Playson High" GameImg={Roulette_0007_Playson_Roul_High_img} dataid="fb47326d4d4c91c41ac6655233bbf52ca8b8937a" />
                        <GameIndividual GameName="Playson Medium" GameImg={Roulette_0008_Playson_Roul_with_track_img} dataid="30059f57ff23927def6f967ac8f3eb34e557dbea" />
                        <GameIndividual GameName="Playson Low" GameImg={Roulette_0009_Playson_Roul_low_img} dataid="16cc5295bfc848af552bc7342c9c0f1b2ca46b3f" />
                        <GameIndividual GameName="OneTouch" GameImg={Roulette_0010_OneTouch_Roulette_img} dataid="25aa3cf6dab045f516877fd46c4bc5d5fad1b9ae" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0011_EZU_roulette_img} dataid="3a120c12e78edbf77a954ec8a1d5d97be6b09fe8" />
                        <GameIndividual GameName="Ezugi Automatic" GameImg={Roulette_0012_EZU_automaticroulette_img} dataid="7d608830b031b43cded3abbbb3719448adff3668" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0013_EZU_rouletteportomaso_img} dataid="17bd33c505647798ff69efed9f2a466bdb152731" />
                        <GameIndividual GameName="EvoPlay" GameImg={Roulette_0014_Evoplay_European_Roul_img} dataid="b43c2be0f8f1464d8992f145d7619850" />
                        <GameIndividual GameName="EvoPlay" GameImg={Roulette_0015_EvoPlay_AmericanRoulette_img} dataid="2fc59408eeea454d94998f8e365b9e11" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0016_BGaming_American_Roulette_img} dataid="97b44e87f1ae3b71dc5c7e92913cc77234a1580e" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0017_BGaming_European_Roulette_img} dataid="c732011a78e064eebb47e077cbfb6c8e8283843d" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0018_BGaming_French_Roulette_img} dataid="5026e867f9101af117d2fb0ca192e1730f7f737a" />
                        <GameIndividual GameName="Betsoft" GameImg={Roulette_0019_BetSoft_EuropeanRoulette_img} dataid="72da29015271c794d24fd38bc453002104be26d7" />
                        <GameIndividual GameName="Betsoft" GameImg={Roulette_0020_Betsoft_American_Roul_img} dataid="7c6ffe9d319310e7763b02d5e7e2a245027d31fb" />
                        <GameIndividual GameName="Belatra" GameImg={Roulette_0021_Belatra_American_Roulette_img} dataid="29e6dcde1cd11b432106af0937cb9e4e558b8689" />
                        <GameIndividual GameName="Belatra" GameImg={Roulette_0022_Belatra_European_Roulette_img} dataid="5f60f72027f3650108907d92c55702953674befd" />
                        <GameIndividual GameName="Amatic" GameImg={Roulette_0023_Amatic_img} dataid="9085932146ecb38f7256b31fa4aacf54fe89bd49" />
                    </GameList>

                    <GameList TabName="american_roulette">
                        <GameIndividual GameName="Yggdrasil" GameImg={Roulette_0000_Yggdrasil_Roul_img} dataid="58bd9c22f7338410ad392ce45e3b8ab0ae88d9f8" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0001_XPG_Roulette2_img} dataid="5f553c8de9f853a222ead7f726f227e88f2381c0" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0002_XPG_Roulett_img} dataid="f354478aa85477dac9d9097b6a3b3648724b79bd" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0003_Vivo_Roulette_partners_img} dataid="e88a563aed2cc6ddbfc263587def1d6d0e0eb145" />
                        <GameIndividual GameName="Lobby" GameImg={Roulette_0004_Vivo_Roulette_img} dataid="3cf6443ea2d1c4501478ed2dcb431efb" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} dataid="d37c7f1a804092380a0ebe6396e748762a9a0c51" />
                        <GameIndividual GameName="OneTouch" GameImg={Roulette_0010_OneTouch_Roulette_img} dataid="25aa3cf6dab045f516877fd46c4bc5d5fad1b9ae" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0011_EZU_roulette_img} dataid="3a120c12e78edbf77a954ec8a1d5d97be6b09fe8" />
                        <GameIndividual GameName="Ezugi Automatic" GameImg={Roulette_0012_EZU_automaticroulette_img} dataid="7d608830b031b43cded3abbbb3719448adff3668" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0013_EZU_rouletteportomaso_img} dataid="17bd33c505647798ff69efed9f2a466bdb152731" />
                        <GameIndividual GameName="EvoPlay" GameImg={Roulette_0015_EvoPlay_AmericanRoulette_img} dataid="2fc59408eeea454d94998f8e365b9e11" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0016_BGaming_American_Roulette_img} dataid="97b44e87f1ae3b71dc5c7e92913cc77234a1580e" />
                        <GameIndividual GameName="Betsoft" GameImg={Roulette_0020_Betsoft_American_Roul_img} dataid="7c6ffe9d319310e7763b02d5e7e2a245027d31fb" />
                        <GameIndividual GameName="Belatra" GameImg={Roulette_0021_Belatra_American_Roulette_img} dataid="29e6dcde1cd11b432106af0937cb9e4e558b8689" />
                        <GameIndividual GameName="Amatic" GameImg={Roulette_0023_Amatic_img} dataid="9085932146ecb38f7256b31fa4aacf54fe89bd49" />
                    </GameList>

                    <GameList TabName="european_roulette">
                        <GameIndividual GameName="Yggdrasil" GameImg={Roulette_0000_Yggdrasil_Roul_img} dataid="58bd9c22f7338410ad392ce45e3b8ab0ae88d9f8" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0001_XPG_Roulette2_img} dataid="5f553c8de9f853a222ead7f726f227e88f2381c0" />
                        <GameIndividual GameName="XPG" GameImg={Roulette_0002_XPG_Roulett_img} dataid="f354478aa85477dac9d9097b6a3b3648724b79bd" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0003_Vivo_Roulette_partners_img} dataid="e88a563aed2cc6ddbfc263587def1d6d0e0eb145" />
                        <GameIndividual GameName="Lobby" GameImg={Roulette_0004_Vivo_Roulette_img} dataid="3cf6443ea2d1c4501478ed2dcb431efb" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} dataid="d37c7f1a804092380a0ebe6396e748762a9a0c51" />
                        <GameIndividual GameName="Superspade Game" GameImg={Roulette_0006_Super_Spade_Games_Roul_img} dataid="2a8f0bff1c0dfc6dc8482accd4a77d36a49e9255" />
                        <GameIndividual GameName="Playson High" GameImg={Roulette_0007_Playson_Roul_High_img} dataid="fb47326d4d4c91c41ac6655233bbf52ca8b8937a" />
                        <GameIndividual GameName="Playson Medium" GameImg={Roulette_0008_Playson_Roul_with_track_img} dataid="30059f57ff23927def6f967ac8f3eb34e557dbea" />
                        <GameIndividual GameName="Playson Low" GameImg={Roulette_0009_Playson_Roul_low_img} dataid="16cc5295bfc848af552bc7342c9c0f1b2ca46b3f" />
                        <GameIndividual GameName="OneTouch" GameImg={Roulette_0010_OneTouch_Roulette_img} dataid="25aa3cf6dab045f516877fd46c4bc5d5fad1b9ae" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0011_EZU_roulette_img} dataid="3a120c12e78edbf77a954ec8a1d5d97be6b09fe8" />
                        <GameIndividual GameName="Ezugi Automatic" GameImg={Roulette_0012_EZU_automaticroulette_img} dataid="7d608830b031b43cded3abbbb3719448adff3668" />
                        <GameIndividual GameName="Ezugi" GameImg={Roulette_0013_EZU_rouletteportomaso_img} dataid="17bd33c505647798ff69efed9f2a466bdb152731" />
                        <GameIndividual GameName="EvoPlay" GameImg={Roulette_0014_Evoplay_European_Roul_img} dataid="b43c2be0f8f1464d8992f145d7619850" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0017_BGaming_European_Roulette_img} dataid="c732011a78e064eebb47e077cbfb6c8e8283843d" />
                        <GameIndividual GameName="BGaming" GameImg={Roulette_0018_BGaming_French_Roulette_img} dataid="5026e867f9101af117d2fb0ca192e1730f7f737a" />
                        <GameIndividual GameName="Betsoft" GameImg={Roulette_0019_BetSoft_EuropeanRoulette_img} dataid="72da29015271c794d24fd38bc453002104be26d7" />
                        <GameIndividual GameName="Belatra" GameImg={Roulette_0022_Belatra_European_Roulette_img} dataid="5f60f72027f3650108907d92c55702953674befd" />
                        <GameIndividual GameName="Amatic" GameImg={Roulette_0023_Amatic_img} dataid="9085932146ecb38f7256b31fa4aacf54fe89bd49" />
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

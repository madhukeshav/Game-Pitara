import React from 'react'
import Header from './Header';
import banner from './Assets/img/poker/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import AllGame_icon from './Assets/img/poker/Icons/all-games.png'
import Casino_Holdem_icon from './Assets/img/poker/Icons/Casino-Holdem.png'

// Poker
import Poker_0000_XPG_texas_holdem_Poker_img from './Assets/img/poker/poker_img/image/Poker_0000_XPG_texas_holdem_Poker.jpg'
import Poker_0001_VivoGaming_CasinoHoldem_img from './Assets/img/poker/poker_img/image/Poker_0001_VivoGaming_CasinoHoldem.jpg'
import Poker_0002_Superspade_Gaming_3_card_Poker_img from './Assets/img/poker/poker_img/image/Poker_0002_Superspade_Gaming_3_card_Poker.jpg'
import Poker_0003_Spadegaming_Win_Three_Cards_Poker_img from './Assets/img/poker/poker_img/image/Poker_0003_Spadegaming_Win_Three_Cards_Poker.jpg'
import Poker_0004_OneTouch_HighHandHoldEm_Poker_img from './Assets/img/poker/poker_img/image/Poker_0004_OneTouch_HighHandHoldEm_Poker.jpg'
import Poker_0005_OneTouch_InBetweenPoker_img from './Assets/img/poker/poker_img/image/Poker_0005_OneTouch_InBetweenPoker.jpg'
import Poker_0006_OneTouch_RussianPoker from './Assets/img/poker/poker_img/image/Poker_0006_OneTouch_RussianPoker.jpg'
import Poker_0007_OneTouch_HoldEm_Poker from './Assets/img/poker/poker_img/image/Poker_0007_OneTouch_HoldEm_Poker.jpg'
import Poker_0008_EZU_casinoholdem_Poker from './Assets/img/poker/poker_img/image/Poker_0008_EZU_casinoholdem_Poker.jpg'
import Poker_0009_Evoplay_Texas_Holdem from './Assets/img/poker/poker_img/image/Poker_0009_Evoplay_Texas_Holdem.jpg'
import Poker_0010_Evoplay_Oasis_Poker from './Assets/img/poker/poker_img/image/Poker_0010_Evoplay_Oasis_Poker.jpg'
import Poker_0011_Evoplay_Teen_Patti_Poker_Indian from './Assets/img/poker/poker_img/image/Poker_0011_Evoplay_Teen_Patti_Poker_Indian.jpg'
import Poker_0012_BGaming_Casino_holdem from './Assets/img/poker/poker_img/image/Poker_0012_BGaming_Casino_holdem.jpg'
import Poker_0013_BGaming_Caribbean_Poker from './Assets/img/poker/poker_img/image/Poker_0013_BGaming_Caribbean_Poker.jpg'
import Poker_0014_BGaming_Oasis_poker from './Assets/img/poker/poker_img/image/Poker_0014_BGaming_Oasis_poker.jpg'
import Poker_0015_BGaming_Texas_holdem from './Assets/img/poker/poker_img/image/Poker_0015_BGaming_Texas_holdem.jpg'
import Poker_0016_BGaming_Trey_poker from './Assets/img/poker/poker_img/image/Poker_0016_BGaming_Trey_poker.jpg'
import Poker_0017_BGaming_Jacks_or_better_Video_Poker from './Assets/img/poker/poker_img/image/Poker_0017_BGaming_Jacks_or_better_Video_Poker.jpg'
import Poker_0018_BGaming_Wild_Texas_Video_Poker from './Assets/img/poker/poker_img/image/Poker_0018_BGaming_Wild_Texas_Video_Poker.jpg'
import Poker_0019_Betgames_6_poker from './Assets/img/poker/poker_img/image/Poker_0019_Betgames_6_poker.jpg'
import Poker_0020_Betgames_Bet_on_Poker from './Assets/img/poker/poker_img/image/Poker_0020_Betgames_Bet_on_Poker.jpg'
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
                        <h3>Poker</h3>
                        <span>Place Your Bets! Please</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="allGame">
                <GameSidebar>
                    <GameSideBarItem sideItem="allGame" name="All Game" ImgSrc={AllGame_icon} />
                    <GameSideBarItem sideItem="casino_holdem" name="Casino Hold'em" ImgSrc={Casino_Holdem_icon} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="allGame">
                        <GameIndividual GameName="XPG" GameImg={Poker_0000_XPG_texas_holdem_Poker_img} dataid="0aa8200a9a68d4a5d164c2cf53735603f8c938ba" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Poker_0001_VivoGaming_CasinoHoldem_img} dataid="e864e7d293376c830c58d7ddddf9983f8d852718" />
                        <GameIndividual GameName="Superspade Gaming" GameImg={Poker_0002_Superspade_Gaming_3_card_Poker_img} dataid="46398a2e27f4c8cb06d1371f8782f1cbc6415c88" />
                        <GameIndividual GameName="Superspade Gaming" GameImg={Poker_0003_Spadegaming_Win_Three_Cards_Poker_img} dataid="fd43123768f998a19f8627693ae009460d036da8" />
                        <GameIndividual GameName="OneTouch" GameImg={Poker_0004_OneTouch_HighHandHoldEm_Poker_img} dataid="71915624f2a0f411e3d02c2f2d407a0cf980ed17" />
                        <GameIndividual GameName="OneTouch" GameImg={Poker_0005_OneTouch_InBetweenPoker_img} dataid="ca112305a2cca481643016b498784f5287573bd6" />
                        <GameIndividual GameName="OneTouch" GameImg={Poker_0006_OneTouch_RussianPoker} dataid="286c55c640e55ad7d89492445acc757658bf6698" />
                        <GameIndividual GameName="OneTouch" GameImg={Poker_0007_OneTouch_HoldEm_Poker} dataid="b753a3c19b2cd72ad9b9cd0399b3f2440f0331d4" />
                        <GameIndividual GameName="Ezugi" GameImg={Poker_0008_EZU_casinoholdem_Poker} dataid="5ffe9c022755838add76ff18161fbb83a8dade46" />
                        <GameIndividual GameName="Evoplay" GameImg={Poker_0009_Evoplay_Texas_Holdem} dataid="0fd19555085421d297a7100bc4591205b9c1d754" />
                        <GameIndividual GameName="Evoplay" GameImg={Poker_0010_Evoplay_Oasis_Poker} dataid="9bd86604547d46bba82703143cdf7fdf" />
                        <GameIndividual GameName="Evoplay" GameImg={Poker_0011_Evoplay_Teen_Patti_Poker_Indian} dataid="78f5c97bca0e47ebbcb04edc48ae3e2e" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0012_BGaming_Casino_holdem} dataid="5f6b1a7b433d004dc17d3b4a9cb6e935f27b73c7" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0013_BGaming_Caribbean_Poker} dataid="824c5b926c0cffa82ad4c1762c9e54f95e88caa7" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0014_BGaming_Oasis_poker} dataid="5a45a08c8e2b40b53c05d7e81bffce9e2b712047" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0015_BGaming_Texas_holdem} dataid="91e97bec787859c0d9ac4c80f55075a0d0a517ec" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0016_BGaming_Trey_poker} dataid="5101943d2b70d579cc00156b522eaf3feb565d10" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0017_BGaming_Jacks_or_better_Video_Poker} dataid="10d1bc05d2bb5c2d1e0f6f16b8b8668e0760871e" />
                        <GameIndividual GameName="BGaming" GameImg={Poker_0018_BGaming_Wild_Texas_Video_Poker} dataid="a2a4d42beae49a4dfecc74c2cd777a58f732055d" />
                        <GameIndividual GameName="Betgames" GameImg={Poker_0019_Betgames_6_poker} dataid="5687990baddbb934621c0b80b0f5f989f521d1a5" />
                        <GameIndividual GameName="Betgames" GameImg={Poker_0020_Betgames_Bet_on_Poker} dataid="75f5ca9e9d9cd3566bb7d95ee214dfebbf62b29b" />
                    </GameList>

                    <GameList TabName="casino_holdem">
                        <GameIndividual GameName="Vivo Gaming" GameImg={Poker_0001_VivoGaming_CasinoHoldem_img} dataid="e864e7d293376c830c58d7ddddf9983f8d852718" />
                        <GameIndividual GameName="Ezugi" GameImg={Poker_0008_EZU_casinoholdem_Poker} dataid="5ffe9c022755838add76ff18161fbb83a8dade46" />
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

import React from 'react'
import Header from './Header';
import banner from './Assets/img/fastgame/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Bingo_img from './Assets/img/fastgame/Icons/Bingo.png'
import jackpot_img from './Assets/img/fastgame/Icons/Jackpot.png'
import lottery_img from './Assets/img/fastgame/Icons/lottery.png'
import scratch_card_img from './Assets/img/fastgame/Icons/Scratch-Card.png'

// Poker
import FG_Bingo_img from './Assets/img/fastgame/fastgame_img/Bingo/Image/FG_Bingo.jpg'
import jakpot_0000_Platipus_Jackpot_Lab_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0000_Platipus_Jackpot_Lab.jpg'
import jakpot_0001_Blueprint_El_Jackpotto_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0001_Blueprint_El_Jackpotto.jpg'
import jakpot_0002_Blueprint_Genie_Jackpots_Megaways_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0002_Blueprint_Genie_Jackpots_Megaways.jpg'
import jakpot_0003_Blueprint_Wish_Upon_A_Jackpot_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0003_Blueprint_Wish_Upon_A_Jackpot.jpg'
import jakpot_0004_Blueprint_Jungle_Jackpots_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0004_Blueprint_Jungle_Jackpots.jpg'
import jakpot_0005_Blueprint_Wish_Upon_A_Jackpot_Megaway_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0005_Blueprint_Wish_Upon_A_Jackpot_Megaway.jpg'
import jakpot_0006_Blueprint_Genie_jackpots_Wishmaker_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0006_Blueprint_Genie_jackpots_Wishmaker.jpg'
import jakpot_0007_Belatra_Halloween_Jackpot_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0007_Belatra_Halloween_Jackpot.jpg'
import jakpot_0008_Belatra_Monkey_Jackpot_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0008_Belatra_Monkey_Jackpot.jpg'
import jakpot_0009_Belatra_NY_Monkey_Jackpot_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0009_Belatra_NY_Monkey_Jackpot.jpg'
import jakpot_0010_Belatra_Christmas_Jackpot_img from './Assets/img/fastgame/fastgame_img/Jackpot_games/Image/0010_Belatra_Christmas_Jackpot.jpg'

// Lottery Images
import jakpot_0000_Lotto_Instant_Win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0000_Lotto_Instant_Win-win-50-80.jpg'
import jakpot_0001_LottoInstantWin_win40_80_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0001_LottoInstantWin-win-40-80.jpg'
import jakpot_0002_LottoInstantWin_win_30_80_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0002_LottoInstantWin-win-30-80.jpg'
import jakpot_0003_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0003_LottoInstantWin-win-20-80.jpg'
import jakpot_0004_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0004_LottoInstantWin-win-10-80.jpg'
import jakpot_0005_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0005_LottoInstantWin-win-10-20.jpg'
import jakpot_0006_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0006_LottoInstantWin-win-7-48.jpg'
import jakpot_0007_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0007_LottoInstantWin-win-5-80.jpg'
import jakpot_0008_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0008_LottoInstantWin-win-5-48.jpg'
import jakpot_0009_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0009_LottoInstantWin-win-5-20.jpg'
import jakpot_0010_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0010_LottoInstantWin-win-1-37.jpg'
import jakpot_0011_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0011_LottoInstantWin-special-studio-2.jpg'
import jakpot_0012_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0012_LottoInstantWin-special-studio-1.jpg'
import jakpot_0013_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0013_LottoInstantWin-lucky-six-35-48.jpg'
import jakpot_0014_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0014_LottoInstantWin-keno-20-80.jpg'
import jakpot_0015_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0015_Lotto_Instant_Win-keno-10-80.jpg'
import jakpot_0016_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0016_LottoInstant Win-keno-5-80.jpg'
import jakpot_0017_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0017_BGaming-jogoDoBicho.jpg'
import jakpot_0018_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0018_Betgames-lucky7.jpg'
import jakpot_0019_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0019_Betgames-lucky5.jpg'
import jakpot_0020_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0020_Betgames-WheelOfFortune.jpg'
import jakpot_0021_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0021_Betgames-lucky_six.jpg'
import jakpot_0022_Lotto_InstantWin_win_img from './Assets/img/fastgame/fastgame_img/Lottery/Image/0022_Bet-gamesDice_Duel_Dice.jpg'

// Scratch Card
import jakpot_0000_BGaming_Scratch_dice_img from './Assets/img/fastgame/fastgame_img/Scratch_Card/Image/0000_BGaming_Scratch_dice.jpg'
import jakpot_0001_Belatra_Piggybankscratchcard_img from './Assets/img/fastgame/fastgame_img/Scratch_Card/Image/0001_Belatra_Piggybankscratchcard.jpg'
import jakpot_0002_Belatra_KingofjumpingScratchCard_img from './Assets/img/fastgame/fastgame_img/Scratch_Card/Image/0002_Belatra_KingofjumpingScratchCard.jpg'


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

            <GameSection defaultTab="bingo">
                <GameSidebar>
                    <GameSideBarItem sideItem="bingo" name="Bingo" ImgSrc={Bingo_img} />
                    <GameSideBarItem sideItem="jackpot_games" name="Jackpot Games" ImgSrc={jackpot_img} />
                    <GameSideBarItem sideItem="Lottery" name="Lottery" ImgSrc={lottery_img} />
                    <GameSideBarItem sideItem="scratch_card" name="Scratch Card" ImgSrc={scratch_card_img} />

                </GameSidebar>

                <GameListSection>
                    <GameList TabName="bingo">
                        <GameIndividual GameName="Belatra" GameImg={FG_Bingo_img} dataid="be9e4cb4e2d12f58599a569e2aabf09546ca5a4e" />
                        <GameIndividual GameName="Belatra" GameImg={FG_Bingo_img} dataid="be9e4cb4e2d12f58599a569e2aabf09546ca5a4e" />

                    </GameList>

                    <GameList TabName="jackpot_games">
                        <GameIndividual GameName="Platiplus" GameImg={jakpot_0000_Platipus_Jackpot_Lab_img} dataid="a429496f52e0cce482408f7d337fb9d04671926a" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0001_Blueprint_El_Jackpotto_img} dataid="7ed494f3b0e0134dde10e6ae061142e753cd5d8a" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0002_Blueprint_Genie_Jackpots_Megaways_img} dataid="c1ea9f50907ad04b2b1ccf6320f1d97b9a71537e" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0003_Blueprint_Wish_Upon_A_Jackpot_img} dataid="e7eeaac893457956501786aad82cbd735be08c9b" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0004_Blueprint_Jungle_Jackpots_img} dataid="f40409f250c2ee0ba709bebd9d71a4324d0f668f" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0005_Blueprint_Wish_Upon_A_Jackpot_Megaway_img} dataid="d88b5dba8325a12d822584007827747dc6b912f4" />
                        <GameIndividual GameName="Blueprint" GameImg={jakpot_0006_Blueprint_Genie_jackpots_Wishmaker_img} dataid="db81382589cb6c96b93b69fcc62465f02bc48079" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0007_Belatra_Halloween_Jackpot_img} dataid="c34a7c3a1c0c034c0d99be6a41296f4203627920" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0008_Belatra_Monkey_Jackpot_img} dataid="8b8505002ad9a1e2637816af860b9839fca3252a" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0009_Belatra_NY_Monkey_Jackpot_img} dataid="5eb5438c7b125b77909375b4b494c6506a4b2e77" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0010_Belatra_Christmas_Jackpot_img} dataid="8c176a5073ad091582348532db14db7932c05e80" />
                    </GameList>

                    <GameList TabName="Lottery">
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0000_Lotto_Instant_Win_img} dataid="790ed33a40fe393f69b922f80243e5035af5f349" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0001_LottoInstantWin_win40_80_img} dataid="ed2d7417bb675c1d679c7d76567ac433a372fa64" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0002_LottoInstantWin_win_30_80_img} dataid="d506945ed408152d90307f2f0188e194b5b80cbb" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0003_Lotto_InstantWin_win_img} dataid="7822d9c213beaa4c38f90fc1931b1c31f9f7dbd5" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0004_Lotto_InstantWin_win_img} dataid="032a82e73a66a2f68f98dde882985167636ace61" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0005_Lotto_InstantWin_win_img} dataid="95a2e28ea97385443bfe3d2d3964b3b4a7d4dfce" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0006_Lotto_InstantWin_win_img} dataid="a80e88d717817b24cdfdd49a5dbecfa0bc8d626e" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0007_Lotto_InstantWin_win_img} dataid="fbf48b64b0d9031c2af4c185dcc6750d45125d75" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0008_Lotto_InstantWin_win_img} dataid="8c83d75cf78a4ae557ade126b1fff50ec09719ae" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0009_Lotto_InstantWin_win_img} dataid="4f052fe2458dd0bd62ebb05bde2980f4929f6380" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0010_Lotto_InstantWin_win_img} dataid="52246c746ecd58a8dee9a14e1b391e5e927a1452" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0011_Lotto_InstantWin_win_img} dataid="d4b215091431b16733e6685e2d0144a332c20ee5" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0012_Lotto_InstantWin_win_img} dataid="89028995f77b3e805785f7dee5a22048150861bb" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0013_Lotto_InstantWin_win_img} dataid="457842270b578f27b13bcfee2e0812954f421adb" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0014_Lotto_InstantWin_win_img} dataid="e732b21952e08d667c28c73afb6a3a0dfe5bc5ee" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0015_Lotto_InstantWin_win_img} dataid="43c938889c0fde3c22e42bf1e362d5914d8f1d8e" />
                        <GameIndividual GameName="Lotto Instant Win" GameImg={jakpot_0016_Lotto_InstantWin_win_img} dataid="c614b4f4cf67532e3c7bf1e515430ae539c7250f" />
                        <GameIndividual GameName="BGaming" GameImg={jakpot_0017_Lotto_InstantWin_win_img} dataid="a1332b8d0bff44b8f75d366c248a02c719ce42cd" />
                        <GameIndividual GameName="Belgames" GameImg={jakpot_0018_Lotto_InstantWin_win_img} dataid="d4c5e1a2cba22ea543c6407b96f7a00cca665b48" />
                        <GameIndividual GameName="Belgames" GameImg={jakpot_0019_Lotto_InstantWin_win_img} dataid="93509d7a9350eeed630807d5e941b70ebf0380be" />
                        <GameIndividual GameName="Belgames" GameImg={jakpot_0020_Lotto_InstantWin_win_img} dataid="1c1c362e5d6f4a158054ac704c7da311d5c5b562" />
                        <GameIndividual GameName="Belgames" GameImg={jakpot_0021_Lotto_InstantWin_win_img} dataid="88a211816b162c58a7b09f98c70f3fd27517b375" />
                        <GameIndividual GameName="Belgames" GameImg={jakpot_0022_Lotto_InstantWin_win_img} dataid="b5bf9542babb2f4f5e470d0af800fb70d4ca5966" />

                    </GameList>

                    <GameList TabName="scratch_card">
                        <GameIndividual GameName="BGaming" GameImg={jakpot_0000_BGaming_Scratch_dice_img} dataid="9360a6055380bf3a837cf5910c993a8734ebafda" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0001_Belatra_Piggybankscratchcard_img} dataid="9b7e7f404bef2c57beb02e45ae0ccf52a660490b" />
                        <GameIndividual GameName="Belatra" GameImg={jakpot_0002_Belatra_KingofjumpingScratchCard_img} dataid="bc3a08d83f402e1331ebff9ebd6c9e7c871a9cd4" />
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

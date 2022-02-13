import React from 'react'
import Header from './Header';
import banner from './Assets/img/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import blackjack from './Assets/img/icons/blackjack.png'
import baccarat from './Assets/img/icons/baccarat.png'
import teenpati from './Assets/img/icons/poker.png'
import andarbahar from './Assets/img/icons/cards.png'

// Blackjack
import blackjack_img from './Assets/img/cards/blackjack/Platiplus-BJ.jpg'
import Ezugi_BJ_Auto_split_img from './Assets/img/cards/blackjack/Ezugi-BJ-Auto-split.jpg'
import Evoplay_BJ_lucky_sevens_img from './Assets/img/cards/blackjack/Evoplay-BJ-lucky-sevens.jpg'
import Ezugi_Live_Bj_img from './Assets/img/cards/blackjack/Ezugi-Live-Bj.jpg'
import XPG_BJ_img from './Assets/img/cards/blackjack/XPG-BJ.jpg'
import Vivo_Gaming_Unlimited_BJ_img from './Assets/img/cards/blackjack/Vivo-Gaming-Unlimited-BJ.jpg'
import Playson_High_img from './Assets/img/cards/blackjack/Playson-High.jpg'
import Onetouch_BJ_Suppreme_img from './Assets/img/cards/blackjack/Onetouch-BJ-Suppreme.jpg'
import Platiplus_Bj_Vip_img from './Assets/img/cards/blackjack/Platiplus--Bj-Vip.jpg'
import BGaming_Mutli_Bj_img from './Assets/img/cards/blackjack/BGaming-Mutli-Bj.jpg'
import Vivi_Gaming_BJ_img from './Assets/img/cards/blackjack/Vivi-Gaming-BJ.jpg'
import Playson_med_img from './Assets/img/cards/blackjack/Playson-med.jpg'
import Bgaming_Mutihand_img from './Assets/img/cards/blackjack/Bgaming-Mutihand.jpg'
import Playson_Low_img from './Assets/img/cards/blackjack/Playson-Low.jpg'
import B_Gaming_Surrender_img from './Assets/img/cards/blackjack/B-Gaming-Surrender.jpg'
import B_gaming_Db_img from './Assets/img/cards/blackjack/B-gaming--Db.jpg'
import Banner_2_Changeable_img from './Assets/img/cards/blackjack/Banner-2-Changeable.jpg'

// Baccart
import b_opt_0000_XPG_Gaming_bcrt_2_img from './Assets/img/cards/Baccarat/b_opt_0000_XPG_Gaming_bcrt_2.jpg'
import b_opt_0001_XPG_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0001_XPG_Gaming.jpg'
import b_opt_0002_Vivo_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0002_Vivo_Gaming.jpg'
import b_opt_0003_Superspade_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0003_Superspade_Gaming.jpg'
import b_opt_0004_EZU_baccarat_img from './Assets/img/cards/Baccarat/b_opt_0004_EZU_baccarat.jpg'
import b_opt_0005_EZU_baccaratko_img from './Assets/img/cards/Baccarat/b_opt_0005_EZU_baccaratko.jpg'
import b_opt_0006_EZU_baccaratsuper6_img from './Assets/img/cards/Baccarat/b_opt_0006_EZU_baccaratsuper6.jpg'
import b_opt_0007_EZU_baccaratnocommission_img from './Assets/img/cards/Baccarat/b_opt_0007_EZU_baccaratnocommission.jpg'
import b_opt_0008_EZU_baccaratqueenco_img from './Assets/img/cards/Baccarat/b_opt_0008_EZU_baccaratqueenco.jpg'
import b_opt_0009_Evoplay_Bacrt777_img from './Assets/img/cards/Baccarat/b_opt_0009_Evoplay_Bacrt777.jpg'
import b_opt_0010_Bgaming_img from './Assets/img/cards/Baccarat/b_opt_0010_Bgaming.jpg'
import b_opt_0011_Betgames_img from './Assets/img/cards/Baccarat/b_opt_0011_Betgames.jpg'

// Teen Pati
import Teen_Patti_0000_XPG_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0000_XPG_tp.jpg'
import Teen_Patti_0001_Ezugi_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0001_Ezugi.jpg'
import Teen_Patti_0002_Evoplay_Pokerr_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0002_Evoplay_Pokerr_tp.jpg'
import Teen_Patti_0003_Superspade_2020_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0003_Superspade_2020_tp.jpg'
import Teen_Patti_0004_Superspade_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0004_Superspade_tp.jpg'

//Andar Bahar
import Andar_bahar_0000_XPG_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0000_XPG_AB.jpg'
import Andar_bahar_0001_Vivo_Gaming_Ab_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0001_Vivo_Gaming_Ab.jpg'
import Andar_bahar_0002_Superspade_ab_NC_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0002_Superspade_ab_NC.jpg'
import Andar_bahar_0003_Superspade_Speed_Ab_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0003_Superspade_Speed_Ab.jpg'
import Andar_bahar_0004_Onetouvh_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0004_Onetouvh_AB.jpg'
import Andar_bahar_0005_Onetouh_AB_M_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0005_Onetouh_AB_M.jpg'
import Andar_bahar_0006_Ezugi_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0006_Ezugi_AB.jpg'
import Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0007_Ezugi_Andar_Bahar_Ott.jpg'
import LoggedHeader from './LoggedHeader';

//See the changes here

const Cards = () => {
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
                        <h3>PLAY MOST POPULAR</h3>
                        <span>card games available free here</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="Black-Jack">
                <GameSidebar>
                    <GameSideBarItem sideItem="Black-Jack" name="Black Jack" ImgSrc={blackjack} />
                    <GameSideBarItem sideItem="baccarat" name="baccarat" ImgSrc={baccarat} />
                    <GameSideBarItem sideItem="teen-pati" name="teenpati" ImgSrc={teenpati} />
                    <GameSideBarItem sideItem="andar-bahar" name="andar bahar" ImgSrc={andarbahar} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="Black-Jack">
                        <GameIndividual GameName="Platiplus" GameImg={blackjack_img} dataid="aad60e43266b22cf533ed73c720519f665d7fc0d" />
                        <GameIndividual GameName="Evoplay" GameImg={Evoplay_BJ_lucky_sevens_img} dataid="3b98aa535d4f492eaa2fe04b7d826105" />
                        {/* <div className="col-sm-6 Big_gameImg_div">
                            <img src={Banner_2_Changeable_img} alt="Changeable" width="100%" height="auto" className="search__banner_img " dataid="cd5fd48f354dedfa6468a3dd4c4b3d51eabf50dc" />
                        </div> */}
                        <GameIndividual GameName="Ezugi" GameImg={Ezugi_BJ_Auto_split_img} dataid="802e0279619f46a9250a134e40e795606f493329" />
                        <GameIndividual GameName="Evoplay" GameImg={Evoplay_BJ_lucky_sevens_img} dataid="0e9e90471848524af0a2eb4ae1f7ca794655b452" />
                        <GameIndividual GameName="Ezugi" GameImg={Ezugi_Live_Bj_img} dataid="0e9e90471848524af0a2eb4ae1f7ca794655b452" />
                        <GameIndividual GameName="XPG BlackJack" GameImg={XPG_BJ_img} dataid="cb2d3bc6e2ce0532610c97b412723ac9a57337ac" />
                        <GameIndividual GameName="Vivo Gaming Blackjack" GameImg={Vivo_Gaming_Unlimited_BJ_img} dataid="efec450ddc51a625d94fe75d0ddc037ccac9259a" />
                        <GameIndividual GameName="Playson" GameImg={Playson_High_img} dataid="08a0600f6b1503f1beb47f68cf757bd46f00fa64" />
                        <GameIndividual GameName="Onetouch" GameImg={Onetouch_BJ_Suppreme_img} dataid="b96f4d83eff9bf67c044ec6d4280bb8a986dec54" />
                        <GameIndividual GameName="Platipus" GameImg={Platiplus_Bj_Vip_img} dataid="cb1bf4924197653242438c79e5b449ce282dbc1a" />
                        <GameIndividual GameName="BGaming" GameImg={BGaming_Mutli_Bj_img} dataid="27edf85d499c935982b9ced360157b2569a012dc" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Vivi_Gaming_BJ_img} dataid="0be9c97134bb4189d90664e142286a60" />
                        <GameIndividual GameName="Playson" GameImg={Playson_med_img} dataid="c49903c2b13c0e7d1b962cff43141d6a62552185" />
                        <GameIndividual GameName="BGaming" GameImg={Bgaming_Mutihand_img} dataid="c82de21cc34b6d1e388bba87b0b2b4b2d05c7e69" />
                        <GameIndividual GameName="Playson" GameImg={Playson_Low_img} dataid="430c2a9b73879833280a0130dda44868bd8945f7" />
                        <GameIndividual GameName="BGaming" GameImg={B_Gaming_Surrender_img} dataid="941df485e412b7e5e0e74926b0beff7a4453ad17" />
                        <GameIndividual GameName="BGaming" GameImg={B_gaming_Db_img} dataid="7eec82ec3dd3594c56da4b49e2b1460b95234510" />
                    </GameList>

                    <GameList TabName="baccarat">
                        <GameIndividual GameName="XPG" GameImg={b_opt_0000_XPG_Gaming_bcrt_2_img} dataid="2d590c3c6f239c2babde26d25d298957d556f93c" />
                        <GameIndividual GameName="XPG" GameImg={b_opt_0001_XPG_Gaming_img} dataid="4fe9d6e2d3e140462f59b8534a3654b2c30fd0e1" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={b_opt_0002_Vivo_Gaming_img} dataid="87c5f36aee08189eab9e6fcbd63c3c16f0f46464" />
                        <GameIndividual GameName="Superspade Gaming" GameImg={b_opt_0003_Superspade_Gaming_img} dataid="06fd977d3218ae05b6c8ab0b028bf9ad41b8a370" />
                        <GameIndividual GameName="Ezugi" GameImg={b_opt_0004_EZU_baccarat_img} dataid="f2da0e82e4b75724d2fffb51aca14434ddd6864b" />
                        <GameIndividual GameName="Ezugi" GameImg={b_opt_0005_EZU_baccaratko_img} dataid="5bb4c11508a9a0bf89dedd3fbecbd3bcc7fb9e1d" />
                        <GameIndividual GameName="Ezugi" GameImg={b_opt_0006_EZU_baccaratsuper6_img} dataid="ab2982dcbec79bb5731084e0cfb6220de2e504e6" />
                        <GameIndividual GameName="Ezugi" GameImg={b_opt_0007_EZU_baccaratnocommission_img} dataid="2a799abeb40fe26896b46caa7a188d469481853f" />
                        <GameIndividual GameName="Ezugi" GameImg={b_opt_0008_EZU_baccaratqueenco_img} dataid="fcfe23fbc299a7ee0692de4da8ee83a6650838ad" />
                        <GameIndividual GameName="Evoplay" GameImg={b_opt_0009_Evoplay_Bacrt777_img} dataid="72233f9eee7d486e8f66e63433914d8b" />
                        <GameIndividual GameName="BGaming" GameImg={b_opt_0010_Bgaming_img} dataid="e546a38b3d94299efb5af6ad82125e0815daa221" />
                        <GameIndividual GameName="Betgames" GameImg={b_opt_0011_Betgames_img} dataid="1566861abf92c6f502d0f2c2a4d47461ff626d7c" />
                    </GameList>

                    <GameList TabName="teen-pati">
                        <GameIndividual GameName="XPG" GameImg={Teen_Patti_0000_XPG_tp_img} dataid="42436349476ea250a5259f5dcf7a0bd165695c66" />
                        <GameIndividual GameName="Ezugi" GameImg={Teen_Patti_0001_Ezugi_img} dataid="cac88d6f80950224007a2d90ad58d5f8c991b72d" />
                        <GameIndividual GameName="Evoplay" GameImg={Teen_Patti_0002_Evoplay_Pokerr_tp_img} dataid="78f5c97bca0e47ebbcb04edc48ae3e2e" />
                        <GameIndividual GameName="Superspade" GameImg={Teen_Patti_0003_Superspade_2020_tp_img} dataid="733b0d8df3021e0c5c2f78271429c58cc9979348" />
                        <GameIndividual GameName="Superspade" GameImg={Teen_Patti_0004_Superspade_tp_img} dataid="fefb56935028b6efed8dc7fca86004550905a00a" />
                    </GameList>

                    <GameList TabName="andar-bahar">
                        <GameIndividual GameName="XPG" GameImg={Andar_bahar_0000_XPG_AB_img} dataid="6f77a7938281be0ce4404e4dd10e1c055c603e20" />
                        <GameIndividual GameName="Vivo Gaming" GameImg={Andar_bahar_0001_Vivo_Gaming_Ab_img} dataid="1a1baeb1fb2ef98eb63dac4dea54b14cedbe290f" />
                        <GameIndividual GameName="Superspade" GameImg={Andar_bahar_0002_Superspade_ab_NC_img} dataid="14d7ac489903e9b0930bd436d8055e7a02e64e97" />
                        <GameIndividual GameName="Superspade" GameImg={Andar_bahar_0003_Superspade_Speed_Ab_img} dataid="8ec70c1ef1327951712af9b1f922ac55ca1485c6" />
                        <GameIndividual GameName="OneTouch" GameImg={Andar_bahar_0004_Onetouvh_AB_img} dataid="5edb4b4931ca12fa3cb2df55060aea476bf1370e" />
                        <GameIndividual GameName="OneTouch" GameImg={Andar_bahar_0005_Onetouh_AB_M_img} dataid="d28c9fb3b6aca17e87cbcb9bfc0e29217dc7eceb" />
                        <GameIndividual GameName="Ezugi" GameImg={Andar_bahar_0006_Ezugi_AB_img} dataid="fde78e89cbe69f90bbfea7f26f67b579477cf46b" />
                        <GameIndividual GameName="Ezugi" GameImg={Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img} dataid="fc2ec564cbd49d19c168f52023d349451a89512d" />
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

export default Cards

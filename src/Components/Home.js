import React from 'react'
import '../Styles/Home.css';
import { HomeSocial } from './HomeSocial.js';
import LadyImage from '../img/lady_img.png';
import Smiley from '../img/smiley_1.svg';
import LadyBgPath from '../img/lady_bgpath.svg';
import Star1 from '../img/star.svg';
import Star2 from '../img/star_2.svg';
import Star3 from '../img/star_3.svg';
import Medal from '../img/medal.svg'

function Home() {
    return (
        <section className="home section bd_grid" id="anasayfa">
            <div className="circle circleOne"></div>
            <div className="circle circleTwo"></div>
            <div className="circle circleThree"></div>

            <div className="homeData">
                <h1 className="homeTitle">
                    Merhaba, ben <br /> <span>Ebra Nur Ulema</span> <br /> Psikolog
                </h1>
                <a href="/#iletisim" className="button">
                    İletişime Geç
                </a>
            </div>

            <div className="homeSocial">
                {
                    HomeSocial && HomeSocial.map((social)  => (
                        <a href={social.iconLink} key={social.id}>
                            {social.iconName}
                        </a>
                    ))
                }
            </div>
            <div className="homeImg">
                <img src={LadyImage} alt="" className="profilImg"></img>
                <img src={LadyBgPath} alt="" className="profileBg"></img>
                <img src={Smiley} alt="" className="smiley"></img>
                <img src={Star1} alt="" className="star1"></img>
                <img src={Star2} alt="" className="star2"></img>
                <img src={Star3} alt="" className="star3"></img>
                
                <div className="box box1">
                    <div className="imgBox">
                        {<img src={Smiley} alt=""></img>}
                    </div>
                    <div className="contentBox">
                        <h2>Klinik Psikoloji</h2>
                        <p>lorem ipsulm data for</p>
                    </div>
                </div>
                <div className="box box2">
                    <div className="imgBox">
                        {<img src={Medal} alt=""></img>}
                    </div>
                    <div className="contentBox">
                        <h2>Klinik Psikoloji</h2>
                        <p>lorem ipsulm data for</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Home };

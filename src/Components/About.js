import React from 'react'
import '../Styles/About.css'
import Model from '../img/lady_img.png';
function About() {
    return (
        <section className="about section" id="hakkimda">
        <div className="circle about_circleOne"></div>
        <div className="circle about_circleThree"></div>
        <h2 className="section_title">Hakkımda</h2>

        <div className="aboutContainer bd_grid">
            <div className="about_text_Section">
                <h2 className="about_subtitle">
                    Ben Ebranur Ulema <br /> <span>Hakkımda</span>
                </h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
            </div>

            <div className="aboutImage">
                <img src={Model} alt=""></img>
            </div>
        </div>
    </section>
    )
}

export { About }

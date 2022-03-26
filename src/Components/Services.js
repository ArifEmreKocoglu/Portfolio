import React from 'react'
import '../Styles/Services.css'
import { ServiceBox } from './ServiceBox'
import Smiley1 from '../img/smiley_1.svg'
import Smiley2 from '../img/smiley_2.svg'
import Smiley3 from '../img/smiley_3.svg'

function Services() {
    return (
        <section className="services section bd_grid" id="blog">
            <div className="circle services_circleOne"></div>
            <div className="circle services_circleThree"></div>
            <h2 className="section_title">Blog</h2>

            <div className="serviceContainer bd_grid">
                <div className="serviceImage">

                    <ServiceBox imgName={Smiley1} box_name={"Design"}></ServiceBox>
                    <ServiceBox imgName={Smiley2} box_name={"Design"}></ServiceBox>
                    <ServiceBox imgName={Smiley3} box_name={"Design"}></ServiceBox>
                    <ServiceBox imgName={Smiley1} box_name={"Design"}></ServiceBox>

                </div>
                <div className="service_text_Section">
                    <h2 className="service_subtitle">
                        Başlık <br /> <span>Blog</span>
                    </h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services 

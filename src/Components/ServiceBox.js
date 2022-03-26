import React from 'react'
import {useHistory} from 'react-router-dom';

function ServiceBox({imgName, box_name}) {
   let history = useHistory();
    return (
        <div className="service_box">
            <img src={imgName} alt=""></img>
            <h2>{box_name}</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, </p>
        <a href="/Dahafazlası" className="service_button" onClick={() =>{history.push('/Dahafazlası')}}>
            Daha Fazlası
        </a>
        </div>
    )
}

export  { ServiceBox }

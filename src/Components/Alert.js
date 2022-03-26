import React from 'react'
import '../Styles/Alert.css';
import { FaCheck } from "react-icons/fa";

function Alert() {
    return (
        <div className="alert" id="alert">
            <div className="iconBox">
                <FaCheck></FaCheck>
            </div>
            <p className="alertText">Mesajınız Gönderildi</p>
        </div>
    )
}

export { Alert }

import React from 'react'
import '../Styles/Contact.css'
import firebase from './FirebaseConfig'

function Contact() {

    const contactForm = firebase.database().ref("contactMessages")
    const contactFormSubmit = () => {
        var name = getElementVal("nameField");
        var email = getElementVal("emailField");
        var msg = getElementVal("msgContent");

        saveMessages(name, email, msg);
        resetForm("contact_form");

        document.querySelector(".alert").classList.add("moveIn");
        document.querySelector(".alert").style.display = "flex";

        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 4000);
    };

    const resetForm = (id) => {
        document.getElementById(id).reset();
    };
    const saveMessages = (name, email, msg) => {
        var newContactFormRef = contactForm.push();
        newContactFormRef.set({
            name: name,
            email: email,
            msg: msg,
        });

    }
    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }
    return (
        <section className="contact section" id="iletisim">
            <div className="circle contact_circleOne"></div>
            <div className="circle contact_circleThree"></div>
            <h2 className="section_title">İletişime Geç</h2>

            <div className="contactContainer bd_grid">
                <form id="contact_form" className="contact_form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="İsim" required id="nameField" className="contact_input"></input>
                    <input type="email" placeholder="E-posta" required id="emailField" className="contact_input"></input>
                    <textarea id="msgContent" cols="0" rows="10" className="contact_input" placeholder="Mesaj"></textarea>
                    <input type="submit"  className="button contact_button" onClick={contactFormSubmit}></input>
                </form>
            </div>
        </section>
    );
}

export { Contact }

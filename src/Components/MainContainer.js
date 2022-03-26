import React from 'react'
import { Home } from "./Home";
import '../Styles/MainContainer.css';
import Services  from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';


function MainContainer() {
    return (
        <main>
            <Home></Home>

            <Services></Services>

            <About></About>

            <Contact></Contact>

            <Footer></Footer>
            
        </main>
    )
}

export { MainContainer }

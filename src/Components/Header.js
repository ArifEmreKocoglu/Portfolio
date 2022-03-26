import React, { useState, useEffect } from 'react'
import {MenuList} from "./MenuList";
import {BiMenuAltRight} from 'react-icons/bi';
import "../Styles/Header.css";

function Header() {
    const [isMenuActive, setmenuActive] = useState(false);

    useEffect(() => {
        const menu = document.getElementById("menu");
        const allLi = menu.querySelectorAll("li");
        function linkActions(){
            allLi.forEach( (n) => n.classList.remove("active"));
            this.classList.add("active");

            setmenuActive(!setmenuActive);
        }
        allLi.forEach( (n) => n.addEventListener('click', linkActions))
    }, [])
    const toggleActive = () =>  {
        setmenuActive(!isMenuActive);
    }
    return (
        <header>
            <nav className="nav bd_grid">
                <a href="/#anasayfa" className="nav_logo">İsim</a>

                <ul id="menu" className={isMenuActive ? "show" : ""}>
                    {
                        MenuList && MenuList.map((n) => (
                            <li key={n.id}>
                                <a href={n.hyper_link}>{n.link_name}</a>
                            </li>
                        ))}
                </ul>
                <i className="toggleMenu" onClick = { toggleActive } >
                    <BiMenuAltRight></BiMenuAltRight>
                </i>
            </nav>
        </header>
    )
}

export { Header }

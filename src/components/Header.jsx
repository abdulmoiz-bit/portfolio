import React, { useState } from 'react';
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../images/avatar.png";
import { NavLink } from 'react-router-dom';
//import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import DarkModeIcon from '@mui/icons-material/DarkMode';
//import AcUnitIcon from '@mui/icons-material/AcUnit';

const Header = () => {
    const [text, showText] = useState(false);
    //const [open, showOpen] = useState(false);
    const [showMenu, setshowMenu] = useState(false);
    //const [currentoption, setcurrentoption] = useState('LIGHT');
    return (
        <div className="header-section">
            <div className='avatar-image' onClick={() => showText(!text)}>
                <img src={avatar} alt="" />
                {
                    text && (
                        <div className='avatar-text' data-aos="zoom-in">
                            <p> Software comes from heaven when you have good hardware. – Ken Olsen </p>
                        </div>
                    )
                }
            </div>


            <div className="menu-btn" style={{ zIndex: "999" }}>
                <span onClick={() => setshowMenu(!showMenu)}>
                    {!showMenu ? <MenuIcon /> : <CloseIcon />}
                </span>
            </div>

            {showMenu && (
                <div className='menu-list' data-aos="fade-left">
                    <ul>
                        <li><a><NavLink to="/">Home</NavLink></a></li>
                        <li><a><NavLink to="/about">About</NavLink></a></li>
                        <li> <a><NavLink to="/contact">Contact</NavLink></a></li>
                    </ul>
                </div>
            )
            }
        </div>

    )
}

export default Header
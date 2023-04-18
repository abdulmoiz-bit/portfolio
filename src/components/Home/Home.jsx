import React, { useState } from 'react';
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../../images/avatar.png";
//import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import DarkModeIcon from '@mui/icons-material/DarkMode';
//import AcUnitIcon from '@mui/icons-material/AcUnit';

const Home = (props) => {
    const [text, showText] = useState(false);
    //const [open, showOpen] = useState(false);
    const [showMenu, setshowMenu] = useState(false);
    //const [currentoption, setcurrentoption] = useState('LIGHT');


    return (
        <div className='hero' id='hero'>
            {showMenu && (
                <div className='menu-list' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio2">Portfolio</a></li>
                        <li> <a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )
            }

            <header className="header-section">
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

                {/* <div className='theme'>
                    <div className='theme-current-option' onClick={() => showOpen(!open)}>
                        <button className='btn-current-option'>{props.currentmode}</button>
                    </div>
                    {open && (
                        <div className='theme-options' data-aos="fade-down">
                            <ul onClick={() => showOpen(false)}>
                                <li onClick={props.changeTheme}>
                                    <span onClick={() => props.setcurrentmode("light")}><WbSunnyIcon />&nbsp;LIGHT</span>
                                </li>
                                <li onClick={props.changeTheme}>
                                    <span onClick={() => props.setcurrentmode("dark")}><DarkModeIcon />&nbsp;DARK</span>
                                </li>
                                <li onClick={props.changeTheme}>
                                    <span onClick={() => props.setcurrentmode("freeze")}><AcUnitIcon />&nbsp;FREEZE</span>
                                </li>
                            </ul>
                        </div>
                    )
                    }
                </div> */}
                <div className="menu-btn" style={{ zIndex: "999" }}>
                    <span onClick={() => setshowMenu(!showMenu)}>
                        {!showMenu ? <MenuIcon /> : <CloseIcon />}
                    </span>
                </div>
            </header>


            <div className='home'>
                <div className='intro'>
                    <h1 style={{ fontSize: '5.5vw', fontFamily: 'Nunito' }}>Hello, Moiz Here.</h1>
                    <h1 className='animate__animated animate__fadeIn' style={{ animationDuration: '8s', fontFamily: 'Noto Sans', paddingTop: '.8rem', color: 'black', fontSize: '4.5vw', letterSpacing: '.6rem' }}>Frontend Engineer...</h1>
                </div>
            </div>

            <div className='box-area'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div >
    )
}

export default Home;
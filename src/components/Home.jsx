import React, { useState } from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='hero' id='hero'>
            <div className='home'>
                <div className='intro'>
                    <h1 style={{ fontSize: '5.5vw', fontFamily: 'Nunito' }}>Hello, Moiz Here.</h1>
                    <h1 style={{ animationDuration: '8s', fontFamily: 'Noto Sans', paddingTop: '.8rem', color: 'black', fontSize: '4.5vw', letterSpacing: '.6rem'}}>Frontend Engineer...</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
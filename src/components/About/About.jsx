import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div>
                <h1 style={{ fontSize: '8vw', textAlign: 'center', textTransform: 'uppercase', opacity: '0.3' }}>About Me</h1>
                <div className='about-text'>
                    <p>
                        <span>Hi </span>
                        <span>I</span>
                        <span>am</span>
                        <span>a</span>
                        <span>Software</span>
                        <span>Engineer</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                        <span>blah</span>
                    </p>
                    <a target="_blank" href="">
                        <button className='submit'>Resume</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About;
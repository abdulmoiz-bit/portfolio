import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h1 style={{ textAlign: "center", fontSize: "5rem" }}>SKILLS</h1>
            <div className='main-skills'>
                <div className='skills-one'>
                    <div>
                        <h1>HTML & CSS/Sass</h1>
                        <h1>JavaScript</h1>
                        <h1>Tailwind</h1>
                    </div>
                    <div>
                        <h1>TypeScript</h1>
                        <h1>React JS</h1>
                        <h1>Next JS</h1>
                    </div>
                </div>
                <div className='skills-two'>
                    <div>
                        <h1>System Design</h1>
                        <h1>Git & GitHub</h1>
                        <h1>Docker & AWS</h1>
                    </div>
                    <div>
                        <h1>WireFraming</h1>
                        <h1>Responsive Design</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
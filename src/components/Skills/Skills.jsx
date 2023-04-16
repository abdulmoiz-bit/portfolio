import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h1 style={{ fontSize: '8vw', textAlign: 'center', textTransform: 'uppercase', opacity: '0.3' }}>Skills</h1>
            <div className='centerskills'>
                <div className='languages'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                </div>  
                <div className='languages'>
                    <span>REACTJS</span>
                    <span>NEXTJS</span>
                    <span>REDUX</span>
                    <span>MATERIALUI</span>
                    <span>BOOTSTRAP</span>
                </div>
                <div className='languages'>
                    <span>DOCKER</span>
                    <span>GIT</span>
                    <span>GITHUB</span>
                </div>
                <div className='languages'>
                    <span>RESPONSIVE DESIGN</span>
                </div>
                <div className='languages'>
                    <span>WIREFRAMING</span>
                </div>
            </div>
           
        </div>
    )
}

export default Skills
import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-content'>
                {/*
                <h1 style={{ fontSize: '6vw', textAlign: 'center', textTransform: 'uppercase'}}>About Me</h1>
                */}
                <h1 style={{ fontSize: "32px" }}>Hi Again! I am Moiz</h1>
                <div className='about-text'>
                    <p>
                        I'm thrilled to introduce myself as a frontend developer. In this fast-paced digital world, where user experience
                        is paramount, I am passionate about crafting visually appealing and user-friendly web applications. With a solid
                        foundation in HTML, CSS, and JavaScript,
                        I bring creativity, problem-solving skills, and a strong attention to detail to every project I undertake. <br /> <br />
                        I am constantly expanding my skill set and keeping up with the latest trends in frontend development.
                        From frameworks like React, Angular, and Vue.js to modern CSS methodologies such as Sass and CSS-in-JS,
                        I am eager to embrace new tools and techniques that enhance the development process and elevate the
                        overall user experience. <br /> <br />
                        Communication and teamwork are essential to my work as a frontend developer. I understand the importance
                        of effective collaboration with cross-functional teams, including UX designers, backend developers, and
                        project managers, to create cohesive and successful projects. I believe in actively seeking and providing
                        constructive feedback to refine my work and foster a positive work environment. <br /> <br />
                        I'm excited to be part of this dynamic industry, and I look forward to collaborating with talented individuals and organizations to build remarkable web applications that leave a lasting impression. Thank you for taking the time to get to know me,
                        and I'm eager to contribute my frontend development skills to make a difference in the digital world.
                    </p>
                    {/*
                    <a target="_blank" href="">
                        <button className='submit'>Resume</button>
                    </a>
                    */}
                </div>
            </div>
        </div>

    )
}

export default About;
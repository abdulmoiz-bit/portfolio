import React from 'react'
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/abdul-moiz-rashid/">
                        <LinkedInIcon /> 
                    </a>
                    &nbsp;
                    <a target="_blank" href='https://github.com/abdulmoiz-bit'>
                        <GitHubIcon />  
                    </a>
                    &nbsp;
                    <a target="_blank" href='https://twitter.com/AbdulMoizRashi1'>
                        <TwitterIcon />
                    </a>
                    <p>Copyright © 2023 Abdul Moiz Rashid. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
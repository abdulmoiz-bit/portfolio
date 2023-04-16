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
                    <LinkedInIcon/> &nbsp;
                    <GitHubIcon/>   &nbsp;
                    <TwitterIcon/>
                    <p>Copyright © 2023 Abdul Moiz Rashid. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
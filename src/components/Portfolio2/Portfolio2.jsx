import React from 'react'
import './Portfolio2.css';
import image1 from "../../images/image-01.png";
import image2 from "../../images/image-02.png";
import image3 from "../../images/image-03.png";
import image4 from "../../images/image-04.png";
import image5 from "../../images/image-05.png";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

const Portfolio2 = () => {
  return (
    <div className='portfolio2' id='portfolio2'>
      <div className='centerportfolio' data-aos="zoom-in">
        <div className='product-details'>
          <h2>Ecommerce Store</h2>
          <p>This Ecommerce Store has contained products fetched by API, a single product page,
            a cart that is functioned by redux, a billing address form, a smooth slider,
            and a fully responsive site.
          </p>
          <a target="_blank" rel="noreferrer" href='https://reactjsecommercestore.vercel.app/' style={{textDecoration: "none"}}>
            <button>
              See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
            </button>
          </a>
        </div>
        <div className='portfolio-image'>
          <img src={image1} alt="" media="(min-width: 902px)"/>      
          <img  src={image2} alt="" />
        </div>
      </div>
      <div className='centerportfolio' data-aos="zoom-out">
        <div className='product-details'>
          <h2>Admin Dashboard</h2>
          <p>The React Admin Dashboard has designed by Material UI contained beautiful icons,
            recharts, products and users list with images.
          </p>
          <a target="_blank" rel="noreferrer" href='https://reactjsadmindashboard.vercel.app/' style={{textDecoration: "none"}}>
            <button>
              See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
            </button>
          </a>
        </div>
        <div className='portfolio-one-image'>
          <img src={image3} alt="" />
        </div>
      </div>
      <div className='centerportfolio' data-aos="zoom-in">
        <div className='product-details'>
          <h2>TextUtils</h2>
          <p>With this amazing TextUtils app, you can convert text into uppercase, lowercase copy text,
            word counters, and more with a dark mode theme.
          </p>
          <a target="_blank" rel="noreferrer" href='https://reactjstextutils.vercel.app/' style={{textDecoration: "none"}}>
            <button>
              See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
            </button>
          </a>
        </div>
        <div className='portfolio-image'>
          <img  src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio2;
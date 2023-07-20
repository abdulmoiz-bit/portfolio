import React from 'react'
import './Portfolio.css';
import mobile from "../images/mobile.png";
import mobiletwo from "../images/mobile-two.png";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
//import image3 from "../../images/image-03.png";
//import image4 from "../../images/image-04.png";
//import image5 from "../../images/image-05.png";


const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>

      <div className='centerportfolio'>
        <div className='product-details'>
          <h2>Ecommerce Store</h2>
          <p>
            This Ecommerce Store has contained products fetched by API,
            a single product page, a cart that is functioned by redux,
            a billing address form, a smooth slider, and a fully responsive site.
          </p>
          <a target="_blank" rel="noreferrer" href='https://reactjstextutils.vercel.app/' style={{ textDecoration: "none" }}>
            <button>
              See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
            </button>
          </a>
        </div>
        
        <div className='portfolio-image'>
          <img src={mobile} alt="" />
        </div>
      </div>

      <div className='centerportfolio' style={{ marginTop: "4rem" }}>
        <div className='product-details'>
          <h2>Sportfolio</h2>
          <p>
            With this amazing TextUtils app, you can convert text into uppercase, lowercase copy text,
            word counters, and more with a dark mode theme.
          </p>
          <a target="_blank" rel="noreferrer" href='https://reactjstextutils.vercel.app/' style={{ textDecoration: "none" }}>
            <button>
              See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
            </button>
          </a>
        </div>
        <div className='portfolio-image'>
          <img src={mobiletwo} alt="" />

        </div>
      </div>

      <div className='centerportfolio' style={{ marginTop: "4rem" }}>
        <h2>StockEx</h2>
      </div>
    </div>
  )
}

export default Portfolio;
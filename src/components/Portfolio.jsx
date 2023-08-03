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
            Ecommerce Website that contains products from API, home page with smooth slider,
            a single product page, a cart that is functioned by redux,
            a billing address form, and a fully responsive site.
          </p>
          <a target="_blank" rel="noreferrer" href='https://ecommercestore-kappa.vercel.app/' style={{ textDecoration: "none" }}>
            <button>
              See The Site Live
            </button>
          </a>
        </div>

        <div className='portfolio-image'>
          <img src={mobile} alt="" />
        </div>
      </div>

      <div className='centerportfolio' style={{ marginTop: "4rem" }}>
        <div className='product-details'>
          <div style={{display: "flex", alignItems: "center"}}>
          <h2>Sportfolio </h2> 
          <h2 style={{ fontSize: "14px", marginLeft: "1rem"}}>For A Client</h2>
          </div>
          <p>
           Website to buy ownership in your favorite sports team, just like stocks.
          </p>
          <a target="_blank" rel="noreferrer" href='https://mysportfolio.vercel.app/' style={{ textDecoration: "none" }}>
            <button>
              See The Site Live 
            </button>
          </a>
        </div>
        <div className='portfolio-image'>
          <img src={mobiletwo} alt="" />
        </div>
      </div>

      <div className='centerportfolio' style={{ marginTop: "4rem" }}>
        <div className='product-details' style={{textAlign: "center"}}>
          <h2>Stockex</h2>
          <h2 style={{fontSize: "14px"}}>Coming Soon</h2>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
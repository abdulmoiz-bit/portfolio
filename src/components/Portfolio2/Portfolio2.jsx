import React from 'react'
import './Portfolio2.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

const Portfolio2 = () => {
  return (
    <div className='portfolio2' id='portfolio2'>
      <div className='centerportfolio' data-aos="zoom-in">
        <div className='product-details'>
          <h3>Ecommerce Store</h3>
          <p>This Ecommerce Store has contained products fetched by API, a single product page,
            a cart that is functioned by redux, a billing address form, a smooth slider,
            and a fully responsive site.
          </p>
          <button>
           See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
          </button>
        </div>
        <div className='portfolio-image'>
          <img src="assets/images/mobile (3).png" alt=""  />
          <img src="assets/images/mobile (5).png" alt="" />
        </div>

      </div>
      <div className='centerportfolio' data-aos="zoom-out">
        <div className='product-details'>
          <h3>Admin Dashboard</h3>
          <p>The React Admin Dashboard has designed by Material UI contained beautiful icons,
            recharts, products and users list with images.
          </p>
          <button>
           See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
          </button>
        </div>
        <div className='portfolio-one-image'>
          <img src="assets/images/mobile.png" alt=""  />

        </div>
      </div>
      <div className='centerportfolio' data-aos="zoom-in">
        <div className='product-details'>
          <h3>TextUtils</h3>
          <p>With this amazing TextUtils app, you can convert text into uppercase, lowercase copy text,
            word counters, and more with a dark mode theme.
          </p>
          <button>
           See Demo &nbsp; <DesktopWindowsIcon style={{ fill: 'black' }} />
          </button>
        </div>
        <div className='portfolio-image'>
          <img src="assets/images/mobile (10).png" alt=""  />
          <img src="assets/images/mobile (8).png" alt=""  />
        </div>
      </div>
    </div>
  )
}

export default Portfolio2;
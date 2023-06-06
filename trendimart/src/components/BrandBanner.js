import React from 'react'
import Button from '@mui/material/Button';
import brandbannerlogo from "../styles/components/assets/images/brandbannerlogo.svg";


const BrandBanner = () => {
  return (
    <div className='brand-banner flex-center'>
        <div className='banner-wrapper'>
        <img src={brandbannerlogo} alt="brand-banner-logo"/>
       <span className='brand-heading font-weight-700'> Big Fashion Festival</span>
       <span className='brand-discount font-weight-700'> 70% - 80% off</span>
       <Button variant="text" className="myButtonClass">Explore</Button>
       </div>
    </div>
  )
}

export default BrandBanner
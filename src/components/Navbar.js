import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import{Link} from "react-router-dom"
import img from '../images/popcorn.png'
import image from '../images/banner.png'
import image1 from '../images/img-left.png'

import Footer from './Footer';
export default function Navbar() {
  return (
    <>
    <nav className="nav">
      <div className='nav_menuIcon'> <MenuSharpIcon/></div>
      
     <div className ="nav_moviedb"> <span className="span">  Movie DB </span></div>
    <div className='nav_items'> 
     <Link to ="/movies/new_release" style={{textDecoration:"none"}}><span className="span1"> New Release </span></Link>
     <Link to="/movies/whats_hot" style={{textDecoration:"none"}}> <span className="span1"> What's Hot </span></Link>
      </div>
    </nav>
    <div className="container">
      <h1>New Releases <span><img src={img}/></span></h1>
      <div className='banner'><img src={image}/></div>
      <div className='corosel'>

      <div className='imleft'><img src={image1}/></div>
      <div className='textright'>
    <h2>Paradise City</h2>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>

      </div>
      
      </div>
      </div>


      <Footer/>
  </>

  )
}

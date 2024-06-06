import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import './navbar.css'
import mobmenu from '../../assets/menu.png'
import contactimg from '../../assets/contact.png'


export default function Navbar() {
  
  const [show,setshow]=useState(false);

  function showandhide(){
    if(show===true) document.getElementsByClassName("mob-menu")[0].classList.add("show-mob-menu");
    else  document.getElementsByClassName("mob-menu")[0].classList.remove("show-mob-menu");
  }
  

  return (
    <nav className="navbar">
        <img alt='logo' src={logo} className="logo"/>
        <div className="navmenu">
           <Link activeClass="active" to='intro' spy={true} offset={-100} smooth={true} duration={400} className="navmenuitems" >Home</Link>
           <Link activeClass="active" to='skills' spy={true} offset={-80} smooth={true} duration={400} className="navmenuitems">About</Link>
           <Link activeClass="active" to='works' spy={true} offset={-70} smooth={true}  duration={400} className="navmenuitems"  >Portfolio</Link>
           <Link activeClass="active" to='candc' spy={true} offset={-80} smooth={true}  duration={400} className="navmenuitems" >Clients</Link>
        </div>
        <button className="navmenubtn" onClick={()=>{ document.getElementsByClassName("contact")[0].scrollIntoView({behavior:'smooth'})}}>
            <img src={contactimg} alt="contact_image" className="navmenubtnimg" />Contact me</button>
         
         
         <img src={mobmenu} alt="" className="mob-menu-pic" onClick={function (){setshow(!show); showandhide();  }}/>
         <div className="mob-menu">
           <Link activeClass="active" to='intro' spy={true} offset={-100} smooth={true} duration={400} className="navmenuitems" >Home</Link>
           <Link activeClass="active" to='skills' spy={true} offset={-80} smooth={true} duration={400} className="navmenuitems">About</Link>
           <Link activeClass="active" to='works' spy={true} offset={-70} smooth={true}  duration={400} className="navmenuitems"  >Portfolio</Link>
           <Link activeClass="active" to='candc' spy={true} offset={-80} smooth={true}  duration={400} className="navmenuitems" >Clients</Link>
           <button className="navmenubtn-mob" onClick={()=>{ document.getElementsByClassName("contact")[0].scrollIntoView({behavior:'smooth'})}}>
            <img src={contactimg} alt="contact_image" className="navmenubtnimg" />Contact me</button>
         </div>

    </nav>
  )
}


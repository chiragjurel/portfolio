import React from 'react'
import './intro.css'
import bgimg from '../../assets/image.png'
import hiremeimg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

export default function Intro() {
  return (
    <div className='intro'>
         <div className="intro-content">
          <span className="hello">Hello,</span>
          <span className="afterhello">I'm <span className="tom">Tom<br></br></span> Website Designer</span>
          <span className="para"> I am a skilled and passionate web designer with experience in creating<br></br> visually appealing and user-friendly websites.</span>
          <button className="intro-content-btn" onClick={()=>{ document.getElementsByClassName("contact")[0].scrollIntoView({behavior:'smooth'})}}><img src={hiremeimg} alt="hire-me" className="hire-me-img" /><span className='hiremetext'>Hire me</span></button>
         </div>
         <img src={bgimg} alt="intro" className="intro-img"/>
    </div>
  )
}

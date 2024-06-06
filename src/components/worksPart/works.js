import React from 'react'
import './works.css'
import workspics1 from '../../assets/portfolio-1.png'
import workspics2 from '../../assets/portfolio-2.png'
import workspics3 from '../../assets/portfolio-3.png'
import workspics4 from '../../assets/portfolio-4.png'
import workspics5 from '../../assets/portfolio-5.png'
import workspics6 from '../../assets/portfolio-6.png'

export default function Works() {
  return (
       <div className="works">
            <h1 className="works-head">My portfolio</h1>
            <span className="works-desc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="works-pics">
                <img src={workspics1} alt="" className="works-pic" />
                <img src={workspics2} alt="" className="works-pic" />
                <img src={workspics3} alt="" className="works-pic" />
                <img src={workspics4} alt="" className="works-pic" />
                <img src={workspics5} alt="" className="works-pic" />
                <img src={workspics6} alt="" className="works-pic" />
            </div>
            <button className="see-more">See more</button>
       </div>
  )
}

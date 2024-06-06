import React from 'react'
import './skillspart.css'
import skillimg1 from '../../assets/ui-design.png'
import skillimg2 from '../../assets/website-design.png'
import skillimg3 from '../../assets/app-design.png'

export default function Skills() {
  return (
    <div className="skills">
        <div className="whatido">
            <span className="widheading"> What I do</span>
            <span className="widpara">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.<br></br>I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS, and Javascript,<br></br>as well as design software such as Adobe Photoshop and illustrator.</span>
        </div>
        <div className="skillsShelf">
            <div className="skilldiv">
                <img src={skillimg1} alt="ui-design" className="skillimg" />
                <span className="skillwrite"><span className="swheading">UI/UX design</span><br></br>This is a demo.Write your own content here.</span>
            </div>
            <div className="skilldiv">
                <img src={skillimg2} alt="website-design" className="skillimg" />
                <span className="skillwrite"><span className="swheading">Website design</span><br></br>This is a demo.Write your own content here.</span>
            </div>
            <div className="skilldiv">
                <img src={skillimg3} alt="app-design" className="skillimg" />
                <span className="skillwrite"><span className="swheading">App design</span><br></br>This is a demo.Write your own content here.</span>
            </div>
        </div>
    </div>
  )
}

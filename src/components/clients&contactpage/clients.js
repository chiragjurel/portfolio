import React, { useRef } from 'react'
import './clients.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import {Link} from 'react-scroll'
import fbicon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser'

export default function ClientsContact() {
  
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_8f14qhq', 'template_cdhypan', form.current, {
      publicKey: 'vafzu6qPnFEZoZOyY',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!');
          document.getElementsByClassName("intro")[0].scrollIntoView({behavior:'smooth'});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  
  return (
    <div className="candc">
        <div className="clients">
           <h1 className="clients-head">My clients</h1>
           <p className='clients-desc'>I have had the opportunity to work with a diverse group of companies.Some of the notable companies I have worked with include:</p>
           <div className='clients-pics'>
             <img src={walmart} alt="" className="clients-pic" />
             <img src={adobe} alt="" className="clients-pic" />
             <img src={microsoft} alt="" className="clients-pic" />
             <img src={facebook} alt="" className="clients-pic" />
           </div>
       </div>
        <div className="contact">
           <h1 className="contact-head">Contact me</h1>
           <span className='contact-desc'>Please fill out the form below to discuss any work opportunities.</span>
           
           <form className="contact-form" ref={form} onSubmit={sendEmail}>
           <input type='text' className='text-area name' placeholder='Your name' name='from_name' required></input>
           <input type='email' className='text-area email' placeholder='Your email' name='sender_email' required></input>
           <textarea name="message" className='text-area msg' placeholder='Your message' required></textarea>
           <button type="submit" value="send" className="submitbtn">Submit</button>
           </form>
           
           <div className="links">
            <Link><img src={fbicon} alt="" className="links-img" /></Link>
            <Link><img src={twitter} alt="" className="links-img" /></Link>
            <Link><img src={youtube} alt="" className="links-img" /></Link>
            <Link><img src={instagram} alt="" className="links-img" /></Link>
           </div>
        </div>
    </div>

  )
}

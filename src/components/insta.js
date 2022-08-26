import React from 'react';
import '../App.css';
import { Button } from './Button';
import './insta.css';
import Slider from './slider/Slider'
import ContactForm from './contactForm';

function Insta() {
  return (
    <div>
      <div className='hero-containerr'>
        <p  className='centered_insta_desc'>INSTAGRAM</p>
        <h1 className='centered_insta_title'>#ESPUFI</h1>
        
      </div>
      <div className='centered_insta_feed'>
            <div className="row">
              <div className="column">
                <img src="images/osq.jpg" />
              </div>
              <div className="column">
                <img src="images/p1.jpg" />
              </div>
              <div className="column">
                <img src="images/p2.jpg" />
              </div>
              
          </div>

          <div className="row">
              <div className="column">
                <img src="images/p3.jpg" />
              </div>
              <div className="column">
                <img src="images/p4.jpg" />
              </div>
              <div className="column">
                <img src="images/p5.jpg"/>
              </div>
              
          </div><br></br>
          
    
        </div> 
        <p className='newsletter_gray_desc'>NEWSLETTER</p>
        <h1 className='newsletter_title'>SUSCRIBITE</h1>
        <p className='newsletter_desc'>Y enterate de todas las novedades</p>
        <ContactForm />
        
         
     </div>
  
  
      
   
  );
}

export default Insta;

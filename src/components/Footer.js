import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Pufi
              
            </Link>
          </div>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>PUFI RAIN</Link>
            <Link to='/'>PUFI PUFF</Link>
            <Link to='/'>PUFI CART</Link>
            <Link to='/'>PUFI NAP</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <Link to='/'>CONTACTO</Link>
            <Link to='/'>AYUDA</Link>
            <Link to='/'>COMO COMPRAR</Link>
            <Link to='/'>TERMINOS & CONDICIONES</Link>
          </div>
          <div class='footer-link-items'>
            <h2>COMPRA 100% SEGURA</h2>
            <Link to='/'>COMPRÁ CON LA GARANTÍA DE PUFF</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>SEGUINOS EN</h2>
            <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          <small class='website-rights'>Pufi Copyright - Todos los derechos reservados</small>
          <small class='website-rights'>BRANDLIVE</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

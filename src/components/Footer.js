import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sloth
            </Link>
          </div>
          <small class='website-rights'>Sloth © 2022</small>
          <div class='social-icons'>

            <Link
            
              class='social-icon-link facebook'
              to='www.facebook.com'
              aria-label='Facebook'
              href={"www.facebook.com"}

            >

              <i class='fab fa-facebook-f' href="www.facebook.com" />
              
            </Link>
            <Link
              class='social-icon-link instagram'
              to='www.facebook.com'
              target='www.facebook.com'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />

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
              aria-label='Telegram'
            >
              <i class='fab fa-telegram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

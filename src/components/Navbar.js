import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsFillArchiveFill, BsBag, BsBookmark, BsUmbrella } from "react-icons/bs";
import { TbArmchair, TbBackpack } from "react-icons/tb";
import { IconContext } from "react-icons";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: "white", size: "2em", className: "global-class-name" }}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Pufi
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
             <TbArmchair/>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                PUFI PUFF 
              </Link>
              
            </li>
            <li className='nav-item'>
              <BsUmbrella/>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PUFFI RAIN
              </Link>
              
            </li>
            <li className='nav-item'>
              <BsBag/>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PUFFI CART
              </Link>
              
            </li>
            <li className='nav-item'>
              <TbBackpack/>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PUFFI NAP
              </Link>
              
            </li>

            <li>
              <Link
                to=''
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                MI CUENTA | MI COMPRA
              </Link>
            </li>
          </ul>
          
              <Link
                to=''
                className='nav-linksright'
              >
                MI CUENTA | MI COMPRA
              </Link>
              
            
        </div>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

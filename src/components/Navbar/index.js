import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              Lotto Sloths
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='Project'
                >
                  Project
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='RoadMap'
                >
                  Road Map
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='Mint'
                  
                >
                  Mint
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='Team'
                  
                >
                  Team
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='Socials'
                  
                >
                  Socials
                </NavLinks>
              </NavItem>

            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/Connect'>Connect</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

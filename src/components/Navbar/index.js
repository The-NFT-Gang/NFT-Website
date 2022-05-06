import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Meta Sloths</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem> 
                            <NavLinks to="OrginStory">Orgin Story</NavLinks>
                        </NavItem>
                        <NavItem> 
                            <NavLinks to="Roadmap">Road Map</NavLinks>
                        </NavItem>
                        <NavItem> 
                            <NavLinks to="Team">Team</NavLinks>
                        </NavItem>
                        <NavItem> 
                            <NavLinks to="Socials">Socials</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/discord'>Discord</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
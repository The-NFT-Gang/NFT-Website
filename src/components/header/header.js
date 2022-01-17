import React from 'react';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Twitter, Instagram, Facebook, Discord } from 'react-bootstrap-icons';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Sloth Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/mint">Mint</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><Twitter size={20}/></Nav.Link>
                        <Nav.Link href="#"><Discord size={20}/></Nav.Link>
                        <Nav.Link href="#"><Facebook size={20}/></Nav.Link>
                        <Nav.Link href="#"><Instagram size={20}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
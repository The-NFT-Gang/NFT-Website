import React from 'react';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Twitter, Instagram, Discord } from 'react-bootstrap-icons';

function Header({ teamRef, aboutRef, mintRef }) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">MetaSloths</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {mintRef.current.scrollIntoView()}}>Mint</Nav.Link>
                        <Nav.Link onClick={() => {aboutRef.current.scrollIntoView()}}>About</Nav.Link>
                        <Nav.Link onClick={() => {teamRef.current.scrollIntoView()}}>Team</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://twitter.com/theslothsnft"><Twitter size={20} /></Nav.Link>
                        <Nav.Link href="#"><Discord size={20} /></Nav.Link>
                        <Nav.Link href="#"><Instagram size={20} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
import React from 'react';

import "./footer.css";

import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { Twitter, Instagram, Discord } from 'react-bootstrap-icons';

export default function Footer() {

    return (
        <Container className="pb-4 pt-4">
            <div className='pt-1 pb-3'>
                <div style={{"width": "100%", "borderTop":"2px solid rgb(244, 67, 54)"}} />
            </div>
            <Row>
                <Col sm={6} className="text-colour pt20 text-section" xs={12}>
                    © Copyright 2022 METASLOTHS
                </Col>
                <Col sm={6} xs={12} className="social-icon-list pt20">
                    <a href="https://twitter.com/theslothsnft" className='text-muted social-link'><Twitter size={20}/></a>
                    <a href="#" className='text-muted social-link'><Discord size={20}/></a>
                    <a href="#" className='text-muted social-link'><Instagram size={20}/></a>
                </Col>
            </Row>
        </Container>
    );
}
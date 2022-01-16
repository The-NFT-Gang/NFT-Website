import React from 'react';

import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { Twitter, Instagram, Facebook, Discord } from 'react-bootstrap-icons';

export default function Footer() {

    return (
        <div>
            <Container className='bg-light mt-5'>
                <Row>
                    <Col>
                        <h6>© Copyright 2022 SLOTH CLUB</h6>
                    </Col>
                    <Col>
                        <h1>SOCIALS</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
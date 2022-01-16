import React from 'react';

import { Container, Carousel, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';

import TeamCard from '../../components/teamCard/teamCard';
import { MEMBERS, CAROUSEL_ITEMS, ABOUT_TEXT, ORIGIN_TEXT, ABOUT_SECTION_IMAGE } from '../../utils';

import './home.css';

export default function Home() {

    const getTeamMembers = () => {
        return (
            MEMBERS.map((member, index) => <Col xl={2} lg={4} md={4} sm={6} key={index}><TeamCard name={member.name} role={member.role} twitter={member.twitter} picture={member.picture} /></Col>)
        );
    }

    const getCarouselItems = () => {
        return (
            CAROUSEL_ITEMS.map((item, index) =>
                <Carousel.Item key={index}>
                    <img
                        src={item.img}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        );
    }

    return (
        <>
            <Carousel>
                {getCarouselItems()}
            </Carousel>
            <Container className="about-section pt-5 pb-5 text-white">
                <Row>
                    <Col lg={5} md={12} sm={12} xs={12} className="about-text-block">
                        <div style={{ "opacity": "1", "transform": "none" }}>
                            <h2>ABOUT SLOTH CLUB</h2>
                            <p className="pt-2">{ABOUT_TEXT}</p>
                            <div className='pt-1 pb-3'>
                                <div style={{ "width": "100%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg={5} md={12} sm={12} xs={12} className="">
                        <div className="about-section-image">
                            <Image src={ABOUT_SECTION_IMAGE.picture} alt={ABOUT_SECTION_IMAGE.alt} />
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col lg={5} md={12} sm={12} xs={12} className="origin-text-block">
                        <Container style={{ "opacity": "1", "transform": "none" }}>
                            <h2>ORIGIN STORY</h2>
                            <p className="pt-2">{ORIGIN_TEXT}</p>
                            <div className='pt-1 pb-3'>
                                <div style={{ "width": "100%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <div className='team-section pt-5 pb-5'>
                <Container className="pb-4">
                    <Row className="text-center pb-5">
                        <h1 className="center text-white">TEAM</h1>
                    </Row>
                    <Row className="text-center">
                        {getTeamMembers()}
                    </Row>
                </Container>
            </div>
        </>
    );
};
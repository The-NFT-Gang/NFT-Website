import React from 'react';

import { Container, Carousel, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';

import TeamCard from '../../components/teamCard/teamCard';
import { MEMBERS, CAROUSEL_ITEMS, ABOUT_TEXT, ORIGIN_TEXT, ABOUT_SECTION_IMAGE, COMMUNITY_IMAGES, COMMUNITY_TEXT } from '../../utils';

import './home.css';

export default function Home() {

    const mintButtonHandler = () => {
        console.log('MINTING!');
    }

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
            <div className="about-section">
                <Container className="pt-5 text-white">
                    <Row>
                        <Col lg={5} md={12} sm={12} xs={12} style={{ "paddingRight": "80px" }}>
                            <div style={{ "opacity": "1", "transform": "none" }}>
                                <h2 className="pb-3">ABOUT SLOTH CLUB</h2>
                                <p>{ABOUT_TEXT}</p>
                                <div className='pt-1 pb-3'>
                                    <div style={{ "width": "70%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12} sm={12} xs={12}>
                            <div style={{ "opacity": "1", "transform": "none" }}>
                                <Image src={ABOUT_SECTION_IMAGE.picture} alt={ABOUT_SECTION_IMAGE.alt} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="pt-5 pb-5 text-white">
                    <Col lg={5} md={12} sm={12} xs={12}>
                        <div style={{ "opacity": "1", "transform": "none" }}>
                            <h2 className="pb-3">ORIGIN STORY</h2>
                            <p>{ORIGIN_TEXT}</p>
                            <div className='pt-1 pb-3'>
                                <div style={{ "width": "70%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
            <div>
                <Container className="pt-5 pb-5 text-white mint-section">
                    <h2 className="pb-2">MINT A SLOTH CLUB NFT</h2>
                    <ul className="pb-5">
                        <li>10,000 unique Sloths will be available</li>
                        <li>Presale: June 1st 2022, 1pm EST</li>
                        <li>Public Sale: June 2nd 2022, 1pm EST</li>
                    </ul>
                    <Button variant="danger" size="lg" onClick={() => mintButtonHandler()}>
                        MINT
                    </Button>
                </Container>
            </div>
            <div>
                <Container className="pt-5 pb-5 text-white">
                    <Row>
                        <Col lg={7} md={12} xs={12}>
                            <Image src={COMMUNITY_IMAGES[0].picture} alt={COMMUNITY_IMAGES[0].alt} className="pr-5" />
                        </Col>
                        <Col lg={5} sm={12} md={12} xs={12} className="pl-5 ml-5">
                            <div className="pl-5 ml-5">
                                <h2 className="pt-5">JOIN OUR COMMUNITY</h2>
                                <p>{COMMUNITY_TEXT}</p>
                            </div>
                            <div className='pt-1 pb-3'>
                                <div style={{ "width": "100%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                            </div>
                            <Row className="d-flex justify-content-center">
                                <Col className="d-flex justify-content-center">
                                    <div className="discord-button-container" style={{ "transform": "none" }}>
                                        <a href="#">
                                            <Image className="discord-button" src={process.env.PUBLIC_URL + '/images/discord.svg'} />
                                        </a>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-center">
                                    <div className="twitter-button-container" style={{ "transform": "none" }}>
                                        <a href="https://twitter.com/theslothsnft">
                                            <Image className="twitter-button" src={process.env.PUBLIC_URL + '/images/twitter.svg'} />
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
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
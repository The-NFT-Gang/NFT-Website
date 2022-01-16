import React from 'react';

import { Container, Carousel, Image, Row, Col } from 'react-bootstrap';

import TeamCard from '../../components/teamCard/teamCard';
import { MEMBERS, CAROUSEL_ITEMS, ABOUT_TEXT, ORIGIN_TEXT, ABOUT_IMAGE } from '../../utils';

import './home.css';

export default function Home() {

    const getTeamMembers = () => {
        return (
            MEMBERS.map((member, index) => <TeamCard key={index} name={member.name} role={member.role} twitter={member.twitter} picture={member.picture} />)
        );
    }

    const getCarouselItems = () => {
        return (
            CAROUSEL_ITEMS.map((item, index) =>
                <Carousel.Item key={index}>
                    <img
                        className=""
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
        <div className='bg-dark'>
            <Carousel>
                {getCarouselItems()}
            </Carousel>
            <Container className='body-section text-white pb-40'>
                <Container className="about-section" id="about-section">
                    <Row>
                        <Col lg={6}>
                            <h1>ABOUT SLOTH CLUB</h1>
                            <p>{ABOUT_TEXT}</p>
                        </Col>
                        <Col lg={6}>
                            <Image src={ABOUT_IMAGE} fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <h1>ORIGIN STORY</h1>
                            <p>{ORIGIN_TEXT}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h1>TEAM</h1>
                    <Row className="mb-5">
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                        <Col>
                            <TeamCard name="Majid Joseph" role="Developer" twitter="https://twitter.com/MajidJoseph3" picture="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/185011159_4225907887440562_6484869504518386466_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=godsSom7CA8AX856-TF&_nc_oc=AQmLSimkNbgfo7sRkoK5cTmZlDXZ24FBGPcagvoE9XXn3LajL1fGrRVCpddqBDgA_ds&_nc_ht=scontent-ort2-1.xx&oh=00_AT8AFbTHW6r4HKu3tKUl23v-P1O3iFuwCXJ84OT0-7u1cw&oe=62086AE3" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};
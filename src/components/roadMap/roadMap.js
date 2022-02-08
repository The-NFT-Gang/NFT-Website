import React from 'react';

import "./roadMap.css";

import { Accordion, Container, useAccordionButton, Button } from 'react-bootstrap';

const RoadMap = ({ title, description, phase }) => {
    return (
        <div className='w-100 w-md-50 align-self-center mt-2 mb-2'>
            <CustomToggle eventKey={phase + ""}>{title}</CustomToggle>
            <Accordion.Collapse eventKey={phase + ""}>
                <CustomItem text={description}></CustomItem>
            </Accordion.Collapse>
        </div>
    );
}

const CustomItem = ({ text }) => {
    return (
        <Container className="pt-3 pb-4" >
            <Container className="pt-4 pb-4 item-container">
                <p className='text text-white'>{text}</p>
            </Container>
        </Container>
    );
}

const CustomToggle = ({ children, eventKey }) => {
    return (
        <Button className="w-100 fs-5 heading phase-button p-1 text-uppercase" size="lg" onClick={useAccordionButton(eventKey)}>{children}</Button>
    );
}

export default RoadMap;

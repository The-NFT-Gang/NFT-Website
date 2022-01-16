import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardHeader from 'react-bootstrap/CardHeader';
import { Twitter } from 'react-bootstrap-icons';


const TeamCard = ({name, role, picture, twitter}) => {
    return(
        <Card border="" bg="dark" text="light" style={{ width: '12rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
                <Card.Link className="mb-2 text-muted" href={twitter}><Twitter /></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;
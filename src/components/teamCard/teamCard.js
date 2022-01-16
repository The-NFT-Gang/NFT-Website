import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardHeader from 'react-bootstrap/CardHeader';
import { Twitter } from 'react-bootstrap-icons';


const TeamCard = ({name, role, picture, twitter}) => {
    return(
        <Card border="light" bg="dark" style={{ width: '10rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title className="mb-2 text-warning">{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-danger">{role}</Card.Subtitle>
                <Card.Link className="mb-2 text-muted" href={twitter}><Twitter size={20}/></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;
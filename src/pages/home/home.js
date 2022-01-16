import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import TeamCard from '../../components/teamCard/teamCard';
import { Members } from '../../utils';

export default function Home() {

    const getTeamMembers = () => {
        return (
            Members.map((member, index) => <TeamCard key={index} name={member.name} role={member.role} twitter={member.twitter} picture={member.picture}/>)
        );
    }

    return (
        <div>
            <Container>
                <CardGroup horizontal>
                    {getTeamMembers()}
                </CardGroup>
            </Container>
        </div>
    );
};
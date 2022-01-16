import React from 'react';

import "./teamCard.css";

import { Image } from 'react-bootstrap';

const TeamCard = ({ name, role, picture, twitter }) => {
    return (
        <a href={twitter} style={{ "color": "unset" }}>
            <div className="member-avatar">
                <Image src={picture} alt="temp" style={{ "transform": "none" }} />
            </div>
            <div className="member-name" style={{ "opacity": "1", "transform": "none" }}>
                {name}
            </div>
            <div className="member-position" style={{ "opacity": "1", "transform": "none" }}>
                {role}
            </div>
        </a>
    );
}

export default TeamCard;
import React from 'react';

import "./roadMap.css";

import { Image } from 'react-bootstrap';

const RoadMap = ({text, title, description}) => {
    return (
        <p href={text} style={{ "color": "unset" }}>
            <div className="roadmap-title fs-bold" style={{ "opacity": "1", "transform": "none" }}>
                {title}
            </div>
            <div className="roadmap-description" style={{"opacity": "1", "transform": "none" }}>
                {description}
            </div>
        </p>
    );
}

export default RoadMap;
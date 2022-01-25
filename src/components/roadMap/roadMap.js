import React from 'react';

import "./roadMap.css";

import { Image } from 'react-bootstrap';

const RoadMap = ({text, img, title, description}) => {
    return (
        <div href={text} style={{ "color": "unset" }}>
            <img src={img}></img>
            <div className="roadmap-title fs-bold fs-3" style={{ "opacity": "1", "transform": "none" }}>
                {title}
            </div>
            <div className="text text-white">
                {description}
            </div>        
        </div>
    );
}

export default RoadMap;
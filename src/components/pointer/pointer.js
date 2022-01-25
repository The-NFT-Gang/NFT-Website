import React from 'react';

import "./pointer.css";

import { Image } from 'react-bootstrap';

const Pointer = ({text, pointer}) => {
    return (
        <div href={text} style={{ "color": "unset" }}>
             <img className="img-preview" src={pointer}></img>
        </div>
    );
}

export default Pointer;
import React from 'react';

import './home.css';

export default function Home() {
    return (
        <>
            <div class="container">
                HI
            </div>
            <div style={{ height: "1000px", backgroundColor: "red", fontSize: "36px" }}>
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
        </>
    );
};

// height:1000px;background-color:red;font-size:36px
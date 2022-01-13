import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Video.css';

function video() {
  return (
    <div className='video-container'>
      <video src='/videos/sloth.mp4' autoPlay loop muted />
      <h1>Sloth NFT</h1>
      <p>Just slothing around</p>
      <div className='video-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MINT
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default video;

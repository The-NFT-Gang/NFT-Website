import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome to the Sloth NFT Project!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/road.jpg'
              text='Road Map For The Project'
              label='Map'
              path='/Road Map'
            />
            <CardItem
              src='images/majid.jpg'
              text='Meet the Team Behind The Project'
              label='Team'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/nft.png'
              text='Mint Date is Still to be Announced'
              label='Mint Date'
              path='/mint'
            />
            <CardItem
              src='images/sloth.jpg'
              text='Preview of the Project'
              label='Preview'
              path='/'
            />
            <CardItem
              src='images/john.JPG'
              text='Think of something else to put here'
              label='John'
              path='/'
            />

            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

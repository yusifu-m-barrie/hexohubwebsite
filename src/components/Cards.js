import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out What We Do!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-9.jpg'
              text='We develop diferent types of websites'
              label='Website Development'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='We develop diferent types of websites'
              label='Website Development'
              path='/services'
            />
            <CardItem
                src='images/img-2.jpg'
                text='We develop diferent types of websites'
                label='Website Development'
                path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

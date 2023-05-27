import React from 'react';
import './News.css';
import NewsItem from './NewsItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Currently Happenig in World!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <NewsItem
              src='/images/one.jpg'
              text='Explore More about Deep Learning'
              label='Deep Learning'
              path='/services'
            />
            <NewsItem
              src='/images/six.jpg'
              text='Fake News Detection'
              label='Fake News'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <NewsItem
              src='/images/seven.jpg'
              text='AI and Robotics in Health'
              label='AI and Robotics'
              path='/services'
            />
            <NewsItem
              src='/images/eight.png'
              text='Machine Learning with health benefits'
              label='ML'
              path='/products'
            />
            <NewsItem
              src='/images/three.jpeg'
              text='Gaming With ML'
              label='ML'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
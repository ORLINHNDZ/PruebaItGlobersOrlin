import React from 'react';
import './Cards.css';
import './CardDesc.css';
import CardItem from './CardItem';
import CardDesc from './CardDesc';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/rain.jpg'
              path='/services'
              label='Pufi Rain'
            />
            <CardDesc
              title='Pufi RAIN'
              src='images/umbrella.png'
              label='Pufi Rain'
              path='/services'
              desc='Descripción del producto. Este es un texto simulado'
            />
            
        
          </ul>
          <ul className='cards__items'>

            <CardDesc
              title='Pufi PUFF'
              src='images/pp.png'
              label='Pufi PUFF'
              path='/services'
              desc='Descripción del producto. Este es un texto simulado'
            />
            <CardItem
              src='images/pbb.jpg'
              path='/services'
              label='Pufi PUFF'
            />
            
        
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/sops.jpg'
              path='/services'
              label='Pufi CART'
            />
            <CardDesc
              title='Pufi CART'
              src='images/bags.png'
              label='Pufi CART'
              path='/services'
              desc='Descripción del producto. Este es un texto simulado'
            />
            
        
          </ul>

          <ul className='cards__items'>

            <CardDesc
              title='Pufi NAP'
              src='images/pw.png'
              label='Pufi Rain'
              path='/services'
              desc='Descripción del producto. Este es un texto simulado'
            />
            <CardItem
              src='images/sleeping.jpg'
              path='/services'
              label='Pufi NAP'
            />
            
        
          </ul>
  
          
        </div>
      </div>
    </div>
  );
}

export default Cards;

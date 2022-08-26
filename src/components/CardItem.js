import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            <div className='centered'>
                            <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            SHOP
                            </Button>
                        </div>
          </figure>
          
        </div>
      </li>
      
    </>
  );
}

export default CardItem;

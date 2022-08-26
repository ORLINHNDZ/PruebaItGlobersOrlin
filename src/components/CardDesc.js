import React from 'react';
import { Link } from 'react-router-dom';
import './CardDesc.css';

function CardDesc(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
              className='cards__item__img_label'
              alt='Travel Image'
              src={props.src}
            />
            <h1 className='centered_title'>{props.title}</h1>
            <p className='centered_line'>____</p>
            <p className='centered_desc'>{props.desc}</p>
            <a className='centered_link'> &#10093; VER  MAS</a>
          </figure>
          
        </div>
      </li>
      
    </>
  );
}

export default CardDesc;

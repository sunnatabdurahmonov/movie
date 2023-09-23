import React from 'react';
import '../card/card.scss';
import newimg from '../../../assets/new2.gif' 

 export const Card = ({movieImg,text}) => {
  return (
    <div>
      <div className="card">
        <img className='new-img' src={newimg} alt="logo" />
       <div className="img-menu">
       <img className='movie-img' src={movieImg} alt={text} />
        <h4 className='movie-text'>{text}</h4>
       </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import '../card3/card3.scss'
import { FaAngleRight } from 'react-icons/fa'
 export const Card3 = ({card3Img,card3Text}) => {
  return (
    <div className='card3'>
        <span className="card3-list">
            <img className='card3-img' src={card3Img} alt={card3Text} />
            <p>{card3Text}</p>
        </span>
        <span className='yangilik-icon'>
            <FaAngleRight/>
        </span>
    </div>
  )
}

export default Card3

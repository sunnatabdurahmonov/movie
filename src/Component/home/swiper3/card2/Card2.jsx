import React from 'react'
import '../card2/card2.scss'


export const Card2 = ({movie2Img,text2}) => {
  return (
    <div className='card-all'>
         <h3 className='tasodifiy-film-text'>TASODIFIY FILM</h3>
        <div className="card-2">
       <div className="img-menu-2">
       <img className='movie-img-2' src={movie2Img} alt={text2} />
        <h4 className='movie-text-2'>{text2}</h4>
       </div>
      </div>
    </div>
  )
}

export default Card2

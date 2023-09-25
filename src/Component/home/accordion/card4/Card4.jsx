import  { useState } from 'react'
import '../card4/card4.scss'
import {FiThumbsUp} from 'react-icons/fi'
import {LuThumbsDown} from 'react-icons/lu'

export const Card4 = ({card4Img,card4Text}) => {

    const [count,setCount] = useState(1)

    const handleplus = () => {
     if(count === 1){
     setCount(count +1)
     }
     else {
      alert("Siz o'z reyaksiyangizni qoldirdingiz")
     }
    }

    const handleminus = () => {
        if(count === 2){
          setCount(count - 1)
        }
        else{
          alert("Siz o'z reyaksiyangizni qoldingiz")
        }
    }

  return (
    <>
    <div className='card4-menu'>
      <img src={card4Img} alt={card4Text} />
    <div className="card4-text">
    <h4>{card4Text}</h4>
    <div className="card4-btn-menu">
        <button className='card4-btn-green' onClick={handleplus}><FiThumbsUp/></button>

        <p>{count}</p>

        <button className='card4-btn-red' onClick={handleminus}><LuThumbsDown/></button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card4

import React from 'react'
import '../button/button.scss'

export const Button = ({text}) => {
  return (
    <div className='btn-list'>
      <button className='btn'>
        {text}
      </button>
    </div>
  )
}

export default Button

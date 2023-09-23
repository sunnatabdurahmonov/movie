import React, { useState } from 'react'
import { FaAngleDoubleDown, FaTelegramPlane } from 'react-icons/fa'
import { MdMovieCreation } from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import { AiOutlineBarChart, AiOutlineExclamationCircle, AiOutlineMail } from 'react-icons/ai'
import '../navbar/navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [button,setButton] = useState(false)

  const handleBtn = () => {
    setButton(!button)
  }
  return (
    <div>
        <div className="container">
          <Link className='btn-telagram' target="_blank" to='http://www.t.me/Kino_olami_kanali_N1'>
        <button className='tg-btn'> <FaTelegramPlane className='telegram-btn'/> Bizda telegramda qo'shiling</button>
          </Link>
       <div className="search-btn">
       <div className="search-menu">
        <input className='search' type="text" placeholder='Film izlash' />
        </div>
        <div className="btn-none">
          <button onClick={handleBtn} className='btn-1'><FaAngleDoubleDown/></button>
        </div>
        <div className="btn-list">
            <button className='btn-1'><MdMovieCreation className='icon-btn'/></button>
            <button className='btn-1'><AiOutlineMail/></button>
            <button className='btn-1'><AiOutlineBarChart/></button>
            <button className='btn-1'><AiOutlineExclamationCircle/></button>
        </div>
       </div>
       <div className={button === true ? 'btn-menu-none' : 'btn-menu-none-2' }>
            <button className='btn-1-none'><MdMovieCreation className='icon-btn'/>  Premyera</button>
            <button className='btn-1-none'><AiOutlineMail/>  Aloqa</button>
            <button className='btn-1-none'><AiOutlineBarChart/>  Statistika</button>
            <button className='btn-1-none'><AiOutlineExclamationCircle/>   Qoida</button>
       </div>
    </div>
    </div>
  )
}

export default Navbar

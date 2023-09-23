import React from 'react'
import {BsFillSendFill, BsInstagram, BsYoutube} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa';
import { App3 } from '../swiper3';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div>
       <h3>Bizga Qo'shiling</h3>
 <ul className="internet">
 <li className="telegram">
   <Link target="_blank" to='http://www.t.me/Kino_olami_kanali_N1'>
   <BsFillSendFill className='tg'/>
   </Link>
    </li>
    <li className="youtube">
      <Link target="_blank" to='https://www.youtube.com/channel/UC0pP6MkQTtO5TOYnKRy9Ftw'>
      <BsYoutube className='tube'/>
      </Link>
    </li>
    <li className="tiktok">
     <Link target="_blank" to='http://tiktok.com/@uzmovicom'>
     <FaTiktok className='tik'/>
     </Link>
    </li>
    <li className="instagram">
    <Link target="_blank" to='https://www.instagram.com/mix_tv_studio/'>
    <BsInstagram className='insta'/>
    </Link>
    </li>
 </ul>
 
  <div className="tasodifiy-film">

  <App3/>
  </div>
    </div>
  )
}

export default Sidebar

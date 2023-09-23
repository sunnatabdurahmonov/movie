import React from 'react'
import '../Footer/footer.scss'
import { Link } from 'react-router-dom'
import uzmovie from '../../assets/logo.gif'
import kattayosh from '../../assets/16+.png'
import hit from '../../assets/hit.gif'

 export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container footer-all">
     <div className="footer-menu">
     <img src={uzmovie} alt="logo" />
        <ul className='footer-list'>
          <li>
            <Link className='footer-link'>Обратная связь</Link>
          </li>
          <li>
            <Link className='footer-link'>Правообладателям</Link>
          </li>
          <li>
            <Link className='footer-link'>DMCA</Link>
          </li>
          <li>
            <Link className='footer-link'>Qoida</Link>
          </li>
          <li>
            <Link className='footer-link'>Реклама</Link>
          </li>
          <li>
            <Link className='footer-link'>Texnik qo'llab quvvatlash</Link>
          </li>
        </ul>
     </div>
    <div className="oxirgi">
    <img src={kattayosh} alt="16+" />
   <Link target='_blank' to='/'>
   <img src={hit} alt="hit" />
   </Link>
    </div>
      </div>
    </footer>
  )
}

export default Footer

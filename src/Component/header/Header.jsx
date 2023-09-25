import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../header/header.scss'
import { Button } from './button'
import {BiSolidDownArrow} from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Navbar } from './navbar'
import uzmovie from '../../assets/logo.gif'

export const Header = () => {
    const [kino,setKino] =  useState(false)
    const [janr,setJanr] =  useState(false)
    const [yil,setYil] =  useState(false)
    const [mamlakat,setMamlakat] =  useState(false)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(prev => !prev)

    const handleKino = () => {
        setKino(!kino)
        setJanr(false)
        setMamlakat(false)
        setYil(false)        
    }
    const handleKino2 = () => {
        setJanr(!janr)
        setKino(false)
        setMamlakat(false)
        setYil(false)  
    }
    const handleKino3 = () => {
        setYil(!yil)
        setJanr(false)
        setMamlakat(false)
        setKino(false)  
    }
    const handleKino4 = () => {
        setMamlakat(!mamlakat)
        setJanr(false)
        setKino(false)
        setYil(false)  
    }
  return (
   <>
    <header className='header'>
        <div class="container">
            <div className='header-menu'>
                <img className='uzmovie-logo' src={uzmovie} alt="logo" />
                <ul className='header-list'>
                    <li>
                        <NavLink className='header-link header-link-1'>Bosh Sahifa</NavLink>
                    </li>
                    <li onClick={handleKino} className='li-menu'>
                        <NavLink  className='header-link header-link-2'>Kinolar</NavLink>
                        <BiSolidDownArrow/>
                    </li>
                    <li>
                        <NavLink className='header-link header-link-3'>Seriallar</NavLink>
                    </li>
                    <li onClick={handleKino2}  className='li-menu'>
                        <NavLink  className='header-link header-link-2'>Janr</NavLink>
                        <BiSolidDownArrow/>
                    </li>
                    <li onClick={handleKino3}  className='li-menu'>
                        <NavLink className='header-link header-link-1'>Yil</NavLink>
                        <BiSolidDownArrow/>
                    </li>
                    <li onClick={handleKino4}  className='li-menu'>
                        <NavLink className='header-link header-link-1'>Mamalakatlar</NavLink>
                        <BiSolidDownArrow/>
                    </li>
                    <li>
                        <NavLink className='header-link header-link-1'>Kino Yangiliklari</NavLink>
                    </li>
                </ul>
                <button onClick={handleToggle} className='menu-bar'>
                    MENU
                    <GiHamburgerMenu className='icon'/>
                </button>
            </div>
        </div>
    </header>
    <div className={toggle === true ? 'sidebar' : 'sidebar-2'}>
    <ul className={toggle === true ? 'header-list-2' : 'header-list-3'}>
                    <li>
                        <NavLink className='menu-item'>Bosh Sahifa</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleKino}  className={kino === false ? 'menu-item' : 'menu-item-2'}>Kinolar 
                        <BiSolidDownArrow/>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className='menu-item'>Seriallar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleKino2} className={janr === false ? 'menu-item' : 'menu-item-2'}>Janr
                        <BiSolidDownArrow/>
                        </NavLink>
                        

                    </li>
                    <li>
                        <NavLink onClick={handleKino3} className={yil === false ? 'menu-item' : 'menu-item-2'}>Yil
                        <BiSolidDownArrow/>
                        </NavLink>
                       
                    </li>
                    <li>
                        <NavLink  onClick={handleKino4}  className={mamlakat === false ? 'menu-item' : 'menu-item-2'}>Mamalakatlar
                        <BiSolidDownArrow/>
                        </NavLink>
                     
                    </li>
                    <li>
                        <NavLink className='menu-item'>Kino Yangiliklari</NavLink>
                    </li>
    </ul>

</div>
    <div className={janr === true ? 'btn-menu' : 'btn-menu-2'}>
        <Button
        text='Jangari'
        />
         <Button
        text='Drama'
        />
         <Button
        text='Komediya '
        />
         <Button
        text='Melodramma'
        />
         <Button
        text='Sarguzasht'
        />
             <Button
        text="Qo'rqinchli"
        />
               <Button
        text="Tarixiy"
        />
               <Button
        text="Kalssika"
        />
               <Button
        text="Fantastika"
        />
               <Button
        text="Hayoliy"
        />
    </div>
    <div className={kino === true ? 'btn-menu' : 'btn-menu-2'}>
        <Button
        text='Tarjima kinolar'
        />
         <Button
        text='Premyera'
        />
         <Button
        text='Tarjima kinolar'
        />
         <Button
        text='Hind kinolar'
        />
         <Button
        text='Multfilm'
        />
             <Button
        text='Yangi Kinolar'
        />
    </div>
    <div className={yil === true ? 'btn-menu' : 'btn-menu-2'}>
        <Button
        text='2023'
        />
         <Button
        text='2022'
        />
         <Button
        text='2021'
        />
         <Button
        text='2020'
        />
         <Button
        text='2019'
        />
             <Button
        text="2018"
        />
               <Button
        text="2017"
        />
               <Button
        text="2016"
        />
               <Button
        text="2015"
        />
               <Button
        text="2014"
        />        <Button
        text="2013"
        />
                <Button
        text="2012"
        />
                <Button
        text="2011"
        />
                <Button
        text="2010"
        />
    </div>
    <div className={mamlakat === true ? 'btn-menu' : 'btn-menu-2'}>
        <Button
        text='Rossiya'
        />
         <Button
        text='AQSh'
        />
         <Button
        text='Turkiya'
        />
         <Button
        text='Xitoy'
        />
         <Button
        text='Hindiston'
        />
             <Button
        text="Avstraliya"
        />
               <Button
        text="Angliya"
        />
               <Button
        text="Korea"
        />
               <Button
        text="Ukraina"
        />
               <Button
        text="Qozog'iston"
        />        <Button
        text="Fransiya"
        />
                <Button
        text="Eron"
        />
                <Button
        text="Yaponiya"
        />
    </div>
    <Navbar/>
   </>
  )
}

export default Header

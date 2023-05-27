import React, { useState } from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
  const [click,setClick] =useState(false); 
  const handleClick = () => setClick(!click)
  const closeMobileMenu =()=> setClick(false);
  const [button, setButton] = useState(true)
  
  const showButton =() =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }
    else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[])
  window.addEventListener('resize', showButton)
  
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        ML <i class='fab fa-typo3' />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times': 'fa fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/' className='nav-links' onClick ={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/services' className='nav-links' onClick ={closeMobileMenu}>
          Services
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/news' className='nav-links' onClick ={closeMobileMenu}>
          News
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/sign-up' className='nav-links-mobile' onClick ={closeMobileMenu}>
          Sign Up
        </Link>
      </li>
      </ul>
      {button && <Button buttonStyle ='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
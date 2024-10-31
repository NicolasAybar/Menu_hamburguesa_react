import { useState } from 'react';

import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleOpenMenu = () => {
    setIsNavVisible(true);
  };

  const handleCloseMenu = () => {
    setIsNavVisible(false);
  };

  return (
    <>
      <header>
        <img className='logo' src='https://reactjs.org/logo-og.png' alt='logo' />
        <button onClick={handleOpenMenu} className='abrir-menu'><i className="bi bi-list"></i></button>
        <nav className={`nav ${isNavVisible ? 'visible' : ''}`} id='nav'>
          <button onClick={handleCloseMenu} className='cerrar-menu'><i className="bi bi-x"></i></button>
          <ul className='nav-list'>
            <li>
              <Link to='/home'>Home</Link>
              
            </li>
            <li>
              <Link to='/about'>About</Link>
              
            </li>
            <li>
              <Link to='/servicios'>Servicios</Link>
              
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
             
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

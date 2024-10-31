import { useState } from 'react';

import './NavBar.css';

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
              <a href='#'>Home</a>
              
            </li>
            <li>
              <a href='#'>About</a>
              
            </li>
            <li>
              <a href='#'>Servicios</a>
              
            </li>
            <li>
              <a href='#'>Contact</a>
             
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

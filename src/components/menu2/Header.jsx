import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from './NavBar.jsx';
import {Home} from '../screens/Home.jsx';
import {About} from '../screens/about/About.jsx';
import {Servicios} from '../screens/Servicios.jsx';
import {Contact} from '../screens/Contact.jsx';
const Header = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
      
  );
};

export default Header;
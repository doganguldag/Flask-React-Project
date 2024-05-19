import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className='navbar'>
      <ul>
        {isLoggedIn ? (
          <>
            <Link to = "/" className='custom-link'>Home</Link> &nbsp;
            <Link to = "/about" className='custom-link'>About</Link> &nbsp;
            <Link to = "/services" className='custom-link'>Services</Link> &nbsp;
            <Link to = "/contact" className='custom-link'>Contact Us</Link> &nbsp;
            <Link to = "/admin" className='custom-link'>Admin</Link> &nbsp;
            <Link to = "/logout" className='custom-link'>Logout</Link>
          </>
        ) : (
          <>
            <Link to = "/login" className='custom-link'>Login</Link> &nbsp;
            <Link to = "/register" className='custom-link'>Register</Link> &nbsp;
          </>
        )}
      </ul>
    </div>
  )
}

export default Navbar;
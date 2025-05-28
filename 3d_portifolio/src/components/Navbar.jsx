import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <NavLink to="/" style={{ marginRight: '1rem' }}>Home</NavLink>
      <NavLink to="/about" style={{ marginRight: '1rem' }}>About</NavLink>
      <NavLink to="/projects" style={{ marginRight: '1rem' }}>Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;

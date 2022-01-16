import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ addCity }) => {
   return (
      <nav>
         <SearchBar addCity={addCity}/>
         {/* icon to return home */}
         <NavLink to='/'>Home</NavLink>
      </nav>
   );
};

export default Navbar;

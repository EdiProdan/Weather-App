import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { connect } from "react-redux";

import { useState } from 'react';

const SearchBar = ({ addCity }) => {
   const [text, setText] = useState('');
   const navigate = useNavigate();

   const onSubmit = (e) => {
      e.preventDefault();

      addCity(text);
      navigate('/citypage');
   };

   return (
      <form className='searchForm' onSubmit={onSubmit}>
         <input
            type='text'
            name='searchText'
            onChange={(e) => {
               setText(e.target.value);
            }}
            value={text}
         ></input>
         <input type='submit' value='Seach'></input>
      </form>
   );
};

export default SearchBar;

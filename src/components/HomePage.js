import React from 'react';
import SearchBar from './SearchBar';

const HomePage = ({ addCity }) => {
   return (
      <div className='homeContainer'>
         <SearchBar addCity={addCity} />
      </div>
   );
};

export default HomePage;

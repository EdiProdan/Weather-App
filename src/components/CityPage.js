import React from 'react';
import CityInfo from './CityInfo';
import HourDay from './HourDay';
import Navbar from './Navbar';

const CityPage = ({ city, addCity }) => {
   return (
      <div>
         <Navbar addCity={addCity}/>
         <div className='cityPageContainer'>
            <CityInfo city={city} />
            <HourDay />
         </div>
      </div>
   );
};

export default CityPage;

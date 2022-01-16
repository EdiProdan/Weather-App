import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CityInfo = ({city}) => {
   return (
      <div className='infoBox'>
         <h2>{city}</h2>
         <FaTimes
            className='icon'
            style={{ color: 'white', cursor: 'pointer' }}
         />
         <h3>18c</h3>
         <p>cloudy</p>
      </div>
   );
};

export default CityInfo;

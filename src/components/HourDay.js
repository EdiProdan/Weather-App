import React from 'react';
import { useState } from 'react';

const HourDay = () => {
   const [hour, setHour] = useState(true);
   const [day, setDay] = useState(false);

   return (
      <div className='hourdayBox'>
         <div className='enable'>
            <button
               onClick={() => {
                  if (!hour) {
                     setHour(!hour);
                     setDay(!day);
                  }
               }}
            >
               Hourly
            </button>
            <button
               onClick={() => {
                  if (!day) {
                     setDay(!day);
                     setHour(!hour);
                  }
               }}
            >
               Daily
            </button>
         </div>
         {hour && (
            <div className='hour'>
               <p>lorem</p>
            </div>
         )}
         {day && (
            <div className='day'>
               <p>ipsum</p>
            </div>
         )}
      </div>
   );
};

export default HourDay;

import React from 'react';
import HomePage from './components/HomePage';
import CityPage from './components/CityPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
   const [city, setCity] = useState('');

   const addCity = (city) => {
      setCity(city);
   };

   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage addCity={addCity} />} />
            <Route
               path='/citypage'
               element={<CityPage city={city} addCity={addCity} />}
            />
         </Routes>
      </Router>
   );
};

export default App;

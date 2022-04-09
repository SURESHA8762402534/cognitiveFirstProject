import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Countrydetails from './component/Countrydetails';
import Weatherdetails from './component/Weatherdetails';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/country/:country' element={<Countrydetails/>}/>
      <Route path='/weather/:capital' element={<Weatherdetails/>}/>
    </Routes>
    </>
  );
}

export default App;

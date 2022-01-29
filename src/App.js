import React, { Component } from "react";
import Home from './pages/home/home'
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom';
import about_us from "./pages/about_us/about_us";



function App() {
  return (
  <BrowserRouter>
    <Home/>
    <Routes>
      <Route exact path = '/' element={<Home/>}/>
      <Route exact path = '/about_us' element={<about_us/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;

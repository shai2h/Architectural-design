import React, { Component } from "react";
import Home from './pages/home/home'
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom';
import About_Us from "./pages/about_us/aboutUs";



function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={<Home/>}/>
      <Route exact path = '/about_us' element={<About_Us/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;

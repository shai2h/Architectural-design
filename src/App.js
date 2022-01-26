import React, { Component } from "react";
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import about_us from './pages/about_us/about_us'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
        </Routes>
      </Router>
    </>
    
  );
}

export default App;

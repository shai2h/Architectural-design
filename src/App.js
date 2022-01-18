import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
import React, { Component } from "react";
import Slider from './components/main-slider/slider';




function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <span className="logo">LOGO</span>
        <nav className="nav-items">
          <ul className="ul-items">
            <li>О нас</li>
            <li>Услуги</li>
            <li>Портфолио</li>
            <li>Награды</li>
          </ul>
        </nav>
        <span className="phone">+800 000 0000</span>      
      </header>

      <div className="main-info">
        <div className="main-slider">
          <Slider/>
        </div>
      </div>

      <div className="about-us">
        <div className="about-us-text">
          <h1>
            Кто мы ?
          </h1>
          <p>The word ‘architecture’ has Greek roots. It means ‘the principal builder’. The style of architecture changes according to latest technical features and people’s tastes. Some people think that architecture is simply the outer look of the building. But it’s not the full notion for this complex art form. Architecture includes designing and constructing the buildings as well as building them. Being an architect is not an easy job. A good architect should think over many tiny details before planning his project. </p>
          <div className="click-more">
            <h5>Подробнее →</h5>
            {/* <div className="arrow"> */}
              {/* <div></div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="about-us-img">

        </div>
      </div> 

      <div className="projects">
        <h1>Проекты</h1>
        <div className="projects-container">
          <div className="card"> 
            <h5>Название проекта</h5>
            <span>Подробнее →</span>
          </div>
          <div className="card">
            <h5>Название проекта</h5>
            <span>Подробнее →</span>
          </div>
          <div className="card">
            <h5>Название проекта</h5>
            <span>Подробнее →</span>
          </div>

          <div className="card">
            <h5>Название проекта</h5>
            <span>Подробнее →</span>
          </div>
        </div>
        <span className="more">Все проекты →</span>

      </div>
      
      <div className="why_us_block">
        <h1>Почему мы?</h1>

        <div className="why_us_container">
          <div className="why_us_item">
            <div className="why_us_item_img">
            </div>
            <div className="why_us_item_info">
              <h5>Заголовок</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
          </div>
          
          <div className="why_us_item">
            <div className="why_us_item_img">
            </div>
            <div className="why_us_item_info">
              <h5>Заголовок</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
          </div>

          <div className="why_us_item">
            <div className="why_us_item_img">
            </div>
            <div className="why_us_item_info">
              <h5>Заголовок</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
          </div>
        </div>
      </div>
      




    </div>
  );
}

export default App;

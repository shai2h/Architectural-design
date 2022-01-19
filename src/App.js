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
            <li>
              <a className="list-item" href="#">О нас</a>
              <a className="list-item" href="#">Услуги</a>
              <a className="list-item" href="#">Портфолио</a>
              <a className="list-item" href="#">Награды</a>
            </li>
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

      <div className="services_block">
        <h1>Услуги</h1>
        <div className="services-container">
          <div className="services_card"> 
            <h5>Название услуги</h5>
            
          </div>
          <div className="services_card">
            <h5>Название услуги</h5>
            
          </div>
          <div className="services_card">
            <h5>Название услуги</h5>
            
          </div>

          <div className="services_card">
            <h5>Название услуги</h5>
            
          </div>
        </div>
        <span className="more-services">Все проекты →</span>
      </div>

      <div className="contact-us-block">
        <div className="contact-info">
          <h1>Оставайся с нами на связи!</h1>
          <div className="contact-options">
            <div className="option">
              <div className="phone-img"></div>
              <h5>Телефон</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <span className="line"></span>
            <div className="option">
              <div className="point-img"></div>
              <h5>Адрес</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <span className="line"></span>
            <div className="option">
              <div className="mail-img"></div>
              <h5>Почта</h5>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
          </div>
        </div>

        <div className="contact-us">
          <h1>Оставить заявку</h1>
          <p>Наш менеджер свяжется с вами
            в течение 30 минут.
          </p>

          <div className="contact-input">
          <input placeholder="Ваше имя" className="name"></input>
          <input placeholder="Ваш номер" className="phone-number"></input>
          <textarea placeholder="Пожалуйста, опишите ваш вопрос" className="question"></textarea>
          <button className="contact-us-btn">Оставить заявку</button>
          </div>
        </div>
      </div>
      
      <div className="map-block">
        <div className="map">
          <div 
            style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Казань</a><a href="https://yandex.ru/maps/43/kazan/house/ulitsa_marshala_chuykova_58b/YEAYdwNpTkcFQFtvfXRydH5nYQ==/?ll=49.149844%2C55.835157&source=wizgeo&utm_medium=mapframe&utm_source=maps&z=18.5" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Маршала Чуйкова, 58Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUyvXDHSC" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
          </div>
      </div>




    </div>
  );
}

export default App;

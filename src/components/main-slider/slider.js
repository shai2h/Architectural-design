import React, { Component } from "react";
import Slider from "react-slick";
import './main-slider.scss';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="slide1">
              <div className="countBox">
                <div className="count">
                  <span>01</span>/03
                </div>
              </div>
              <div className="first-block">
                <h1>Архитектурное проектирование</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.</p>
                  <button className="first-block-btn">
                    Оставить заявку
                  </button>
              </div>
              <div className="mail-svg"></div>
              <div className="inst-svg"></div>
            </div>

            <div className="slide1">
              <div className="countBox">
                <div className="count">
                  <span>02</span>/03
                </div>
              </div>
              <div className="first-block">
                <h1>СЛАЙД НОМЕР ДВА</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.</p>
                  <button className="first-block-btn">
                    Оставить заявку
                  </button>
              </div>
              <div className="mail-svg"></div>
              <div className="inst-svg"></div>

            </div>

            <div className="slide1">
              <div className="countBox">
                <div className="count">
                  <span>03</span>/03
                </div>
              </div>

              <div className="first-block">
                <h1>СЛАЙД НОМЕР ТРИ</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.</p>
                  <button className="first-block-btn">
                    Оставить заявку
                  </button>
              </div>
              <div className="mail-svg"></div>
              <div className="inst-svg"></div>
            </div>
          </Slider>
        </div>
      );
    }
  }



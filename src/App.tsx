import "./App.css";
import MenuBurger from "./images/menu-burger.svg";
import MapSpot from "./images/map-spot.svg";
import Login from "./images/login.svg";
import Bin from "./images/bin.svg";
import Back from "./images/back.svg";
import Next from "./images/next.svg";
import Star from "./images/star.svg";
import Point from "./images/dot.svg";
import Low from "./images/low.svg"
import Box from "./images/box.svg"
import Shop from "./images/shop.svg"


import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Coffee1 from "./images/Карусель слайд 1.png";
import Coffee2 from "./images/Карусель слайд 2.png";
import Coffee3 from "./images/Карусель слайд 3.png";
import Coffee4 from "./images/Карусель слайд 4.png";
import Coffee5 from "./images/Карусель слайд 5.png";

import { useState } from "react";

function App() {
  const bigSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const littleSlider = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    swipeToSlide: true,
  };

  const images = [Coffee1, Coffee2, Coffee3, Coffee4, Coffee5];

  const [navBigSlider, setNavBigSlider] = useState<Slider | undefined>(
    undefined
  );
  const [navLittleSlider, setNavLittleSlider] = useState<Slider | undefined>(
    undefined
  );

  return (
    <>
      <div className="strawberry_app">
        <header className="header">
          <div className="container">
            <div className="header-box">
              <div className="header-logo">Strawberry</div>
              <div className="header-burger">
                <img src={MenuBurger} alt="menu burger" className="icon" />
              </div>
              <div className="header-search">
                <input type="text" placeholder="Найти на Strawberry" />
              </div>
              <div className="header-info">
                <div className="header-info--adresses">
                  <img src={MapSpot} alt="иконка" />
                  Адреса
                </div>
                <div className="header-info--login">
                  <img src={Login} alt="иконка" />
                  Войти
                </div>
                <div className="header-info--bin">
                  <img src={Bin} alt="иконка" />
                  Корзина
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container">
            <div className="back-to-main-page">
              <img src={Back} alt="иконка" />
              Главная
            </div>
            <div className="product-box">
              <div className="product-images">
                <div className="little-slider">
                  <Slider
                    {...littleSlider}
                    ref={(slider) => setNavLittleSlider(slider || undefined)}
                    asNavFor={navBigSlider}
                  >
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`фото ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="big-slider">
                  <Slider
                    {...bigSlider}
                    ref={(slider) => setNavBigSlider(slider || undefined)}
                    asNavFor={navLittleSlider}
                  >
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`фото ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="product-info">
                <div className="info-brend">
                  <div className="info-brend--text">GREEKBAR</div>
                  <img src={Next} alt="иконка" className="next-icon"/>
                </div>
                <div className="info-title">
                Кофемолка электрическая для кофе, электрокофемолка
                </div>
                <div className="info-rating">
                  <div className="stars">
                    <img src={Star} alt="иконка" />
                    <div className="rate">4.8</div>
                  </div>
                  <img src={Point} alt="иконка" />
                  <div className="opinions"> 17 920 оценок</div>
                  <img src={Next} alt="иконка" className="next-icon"/>
                </div>
                <div className="second-info">
                  <div className="second-info--first">Черный</div>
                  <img src={Coffee1} alt="иконка" />
                  <div className="second-info--main">
                    <div className="info-row">
                      <div className="info-label">Артикул</div>
                      <div className="info-value">276697890</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Модель</div>
                      <div className="info-value">
                      Электрическая кофемолка последнего поколения
                      </div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Гарантийный срок</div>
                      <div className="info-value">3 года</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Тип управления</div>
                      <div className="info-value">механическое; импульсное</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Длина кабеля</div>
                      <div className="info-value">90 см</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Срок эксплуатации</div>
                      <div className="info-value">3 года</div>
                    </div>
                  </div>
                  <div className="all-description">Все характеристики и описание</div>
                </div>
              </div>
              <div className="product-price">
                <div className="red-and-grey-price">
                  <div className="red-price">981 ₽</div>
                  <div className="grey-crossed-price">1240 ₽</div>
                </div>
                <div className="price-low">
                  <div className="low">
                    <img src={Low} alt="иконка" />
                    <div className="price">90 ₽</div>
                  </div>
                  <img src={Next} alt="иконка" />
                </div>
                <button className="button-card">Добавить в корзину</button>
                <div className="box">
                  <img src={Box} alt="иконка" />
                  <div className="box-date">19 января,</div>
                  <div className="box-wb">склад WB</div>
                </div>
                <div className="shop">
                  <img src={Shop} alt="иконка" />
                  <div className="shop-name">Monkey Inc</div>
                  <div className="stars">
                    <img src={Star} alt="иконка" />
                    <div className="rate">4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

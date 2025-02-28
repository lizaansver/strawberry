import './Card.css'
import Back from '../../images/back.svg'
import Next from '../../images/next.svg'
import Star from '../../images/star.svg'
import Point from '../../images/dot.svg'
import Low from '../../images/low.svg'
import Box from '../../images/box.svg'
import Shop from '../../images/shop.svg'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useEffect, useRef, useState } from 'react'
import { Header } from '../header/Header'

import { Link } from 'react-router-dom'

export const Card = () => {
  const [images, setImages] = useState<string[]>([])

  const [navBigSlider, setNavBigSlider] = useState<Slider | undefined>(
    undefined,
  )
  const [navLittleSlider, setNavLittleSlider] = useState<Slider | undefined>(
    undefined,
  )
  const [isHovered, setIsHovered] = useState(false)

  const littleSliderRef = useRef<HTMLDivElement | null>(null)

  const littleSlider = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: images.length >= 5,
    swipeToSlide: true,
  }

  const bigSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: images.length > 0,
  }

  const downloadImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader() //читается содержимое файла

      reader.onloadend = () => {
        const newImages = [...images, reader.result as string]
        setImages(newImages)
        localStorage.setItem('images', JSON.stringify(newImages))
        console.log('Images after download:', newImages)
      }

      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    const storedImages = localStorage.getItem('images')
    if (storedImages) {
      const parsedImages = JSON.parse(storedImages)
      setImages(parsedImages)
      console.log('Images from localStorage:', parsedImages)
    }
  }, [])

  useEffect(() => {
    // Функция для обновления позиции стрелки
    const updateArrowPosition = () => {
      if (littleSliderRef.current) {
        const sliderHeight = littleSliderRef.current.clientHeight
        const arrow = littleSliderRef.current.querySelector(
          '.slick-next',
        ) as HTMLElement
        if (arrow) {
          arrow.style.top = `${sliderHeight - 40}px` // Adjust the position as needed
        }
      }
    }

    // Вызов функции для установки начальной позиции стрелки
    updateArrowPosition()

    // Добавление обработчика события resize(чтобы функция updateArrowPosition вызывалась каждый раз, когда размер окна изменяется)
    window.addEventListener('resize', updateArrowPosition)

    // Очистка обработчика события resize при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateArrowPosition)
    }
  }, [images])
  //Функция updateArrowPosition вызывается при изменении размера окна и при изменении состояния images.

  return (
    <>
      <div className="strawberry_app">
        <Header />
        <section>
          <div className="container">
            <div className="back-to-main-page">
              <img src={Back} alt="иконка" />
              <Link to="/">Главная</Link>
            </div>
            <div className="product-box">
              <div className="product-images">
                <div className="little-slider" ref={littleSliderRef}>
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

                <div
                  className="big-slider"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
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
                  <input
                    type="file"
                    onChange={downloadImages}
                    style={{ display: 'none' }}
                    id="fileInput"
                    accept="image/png, image/jpeg"
                  />
                  {images.length === 0 || isHovered ? (
                    <label htmlFor="fileInput" className="download-btn">
                      Добавить серию фото
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="product-info">
                <div className="info-brend">
                  <div className="info-brend--text">GREEKBAR</div>
                  <img src={Next} alt="иконка" className="next-icon" />
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
                  <img src={Next} alt="иконка" className="next-icon" />
                </div>
                <div className="second-info">
                  <div className="second-info--first">Черный</div>
                  {images.length === 0 ? (
                    <div className="first-photo"></div>
                  ) : (
                    <img src={images[0]} alt="иконка" />
                  )}
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
                  <div className="all-description">
                    Все характеристики и описание
                  </div>
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
  )
}

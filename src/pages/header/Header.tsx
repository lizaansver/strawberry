import MenuBurger from '../../images/menu-burger.svg'
import MapSpot from '../../images/map-spot.svg'
import Login from '../../images/login.svg'
import Bin from '../../images/bin.svg'

import './Header.css'

export const Header = () => {
  return (
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
  )
}

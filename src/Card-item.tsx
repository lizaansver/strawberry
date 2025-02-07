import Next from "./images/next.svg";
import Star from "./images/star.svg";
import Point from "./images/dot.svg";
import Bin from "./images/bin.svg";
import './Home.css'


import { ProductProps } from "./productProps"; // мы не передаем весь массив продакст мы передаем только один объект продакт из него - а точнее его пропсы
import { Link } from 'react-router-dom';
interface CardItemProps {
    product: ProductProps
}

export const CardItem: React.FC<CardItemProps> = ({product}) => {
    return (
       <Link to='/card' style={{ textDecoration: 'none', color: 'inherit' }}> 
       <div className="card-item">
            <img src={product.image} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">{product.redPrice}</div>
                <div className="grey-crossed-price">{product.greyPrice}</div>
            </div>
            <div className="card-info">
              <div className="card-brend">{product.brand}</div>
              <div className="slash">/</div>
              <div className="card-title">{product.title}</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">{product.rating}</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions">{product.opinions}</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>{product.delivery}</h4>  
                </div>
            </button>
          </div>
       </Link>
    )
}
import "./Home.css";
import { Header } from "./header/Header";

import { products } from "./products";
import { CardItem } from "./Card-item";

export const Home:React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Миллионы товаров на ваш вкус</h2>
        <div className="card-list">
          {products.map((product) => (
            <CardItem key={product.id} product={product}/>
          ))}
          {/* <div className="card-item">
            <img src={Photo1} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">981 ₽</div>
                <div className="grey-crossed-price">1240 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">GeekPro</div>
              <div className="slash">/</div>
              <div className="card-title">Кофемашинка мощная 500 ВТ</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">4.8</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 17 920 оценок</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Завтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo2} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">459 ₽</div>
                <div className="grey-crossed-price">890 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Animal</div>
              <div className="slash">/</div>
              <div className="card-title">Корм для кошек сухой</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">4.9</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 5 905 оценок</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Завтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo3} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">124 ₽</div>
                <div className="grey-crossed-price">594 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Spicy</div>
              <div className="slash">/</div>
              <div className="card-title">Cоус Перец 120 мл</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">3.9</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 192 оценки</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Послезавтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo4} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">520 ₽</div>
                <div className="grey-crossed-price">893 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Кико</div>
              <div className="slash">/</div>
              <div className="card-title">Пояс женский красный кожанный</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">4.2</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 475 оценок</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Послезавтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo5} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">1780 ₽</div>
                <div className="grey-crossed-price">3499 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Sakura Woman</div>
              <div className="slash">/</div>
              <div className="card-title">Халат женский шелковый</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">4.2</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 242 оценки</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Завтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo6} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">244 ₽</div>
                <div className="grey-crossed-price">667 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Spicy</div>
              <div className="slash">/</div>
              <div className="card-title">Соус бургер Хайнц</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">5.0</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 13 оценок</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Завтра</h4>  
                </div>
            </button>
          </div>
          <div className="card-item">
            <img src={Photo7} alt="картинка" />
              <div className="red-and-grey-price">
                <div className="red-price">456 ₽</div>
                <div className="grey-crossed-price">840 ₽</div>
            </div>
            <div className="card-info">
              <div className="card-brend">Кико</div>
              <div className="slash">/</div>
              <div className="card-title">Ремень женский кожаный</div>
            </div>
            <div className="card-rating">
              <div className="stars">
                <img src={Star} alt="иконка" />
                <div className="rate">3.8</div>
              </div>
              <img src={Point} alt="иконка" />
              <div className="opinions"> 17 оценок</div>
              <img src={Next} alt="иконка" className="next-icon" />
            </div>
            <button className="card-btn">
                <div className="btn-info">
                 <img src={Bin} alt="иконка" />
                <h4>Завтра</h4>  
                </div>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

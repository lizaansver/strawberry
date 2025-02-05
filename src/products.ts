import Photo1 from "./images/Карусель слайд 1.png";
import Photo2 from "./images/КОШАЧИЙ КОРМ.jpg";
import Photo3 from "./images/ПЕРЕЦ.jpg";
import Photo4 from "./images/ременьбелый.jpg";
import Photo5 from "./images/халат.jpg";
import Photo6 from "./images/соус  хайнц.png";
import Photo7 from "./images/ременькор.jpg";

export interface ProductProps {
  id: number;
  image: string;
  redPrice: string;
  greyPrice: string;
  brand: string;
  title: string;
  rating: number;
  opinions: number;
  delivery: string;
}

export const products: ProductProps[] = [
    {
      id: 1,
      image: Photo1,
      redPrice: "981 ₽",
      greyPrice: "1240 ₽",
      brand: "GeekPro",
      title: "Кофемашинка мощная 500 ВТ",
      rating: 4.8,
      opinions: 17920,
      delivery: "Завтра",
    },
    {
      id: 2,
      image: Photo2,
      redPrice: "459 ₽",
      greyPrice: "890 ₽",
      brand: "Animal",
      title: "Корм для кошек сухой",
      rating: 4.9,
      opinions: 5905,
      delivery: "Завтра",
    },
    {
      id: 3,
      image: Photo3,
      redPrice: "124 ₽",
      greyPrice: "594 ₽",
      brand: "Spicy",
      title: "Соус Перец 120 мл",
      rating: 3.9,
      opinions: 192,
      delivery: "Послезавтра",
    },
    {
      id: 4,
      image: Photo4,
      redPrice: "520 ₽",
      greyPrice: "893 ₽",
      brand: "Кико",
      title: "Пояс женский красный кожанный",
      rating: 4.2,
      opinions: 475,
      delivery: "Послезавтра",
    },
    {
      id: 5,
      image: Photo5,
      redPrice: "1780 ₽",
      greyPrice: "3499 ₽",
      brand: "Sakura Woman",
      title: "Халат женский шелковый",
      rating: 4.2,
      opinions: 242,
      delivery: "Завтра",
    },
    {
      id: 6,
      image: Photo6,
      redPrice: "244 ₽",
      greyPrice: "667 ₽",
      brand: "Spicy",
      title: "Соус бургер Хайнц",
      rating: 5.0,
      opinions: 13,
      delivery: "Завтра",
    },
    {
      id: 7,
      image: Photo7,
      redPrice: "456 ₽",
      greyPrice: "840 ₽",
      brand: "Кико",
      title: "Ремень женский кожаный",
      rating: 3.8,
      opinions: 17,
      delivery: "Завтра",
    },
  ];

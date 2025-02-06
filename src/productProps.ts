// import Photo1 from "./images/Карусель слайд 1.png";
// import Photo2 from "./images/КОШАЧИЙ КОРМ.jpg";
// import Photo3 from "./images/ПЕРЕЦ.jpg";
// import Photo4 from "./images/ременьбелый.jpg";
// import Photo5 from "./images/халат.jpg";
// import Photo6 from "./images/соус  хайнц.png";
// import Photo7 from "./images/ременькор.jpg";

export interface ProductProps {
  id: number;
  image?: string;
  redPrice: string;
  greyPrice: string;
  brand: string;
  title: string;
  rating: number;
  opinions: number;
  delivery: string;
}



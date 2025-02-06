import { useEffect, useState } from "react";
import "./Home.css";
import { Header } from "./header/Header";
import { CardItem } from "./Card-item";

import getProducts from './getProducts';
import { ProductProps } from "./productProps";



export const Home:React.FC = () => {
  const [productsWithPhoto, setProductsWithPhoto] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setProductsWithPhoto(products)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <h2>Миллионы товаров на ваш вкус</h2>
        <div className="card-list">
          {productsWithPhoto.map((product) => (
            <CardItem key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  );
};

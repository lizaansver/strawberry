import { supabase } from './supabase';
import { ProductProps } from './productProps';
import { mockData } from './mockData';

const getProducts = async (): Promise<ProductProps[]> => {
    console.log('Fetching products from Supabase...');
  const { data, error } = await supabase.from('Strawberry marketplace photos').select('image');
  
  if (error) throw error;

  console.log('Data from Supabase:', data);

  // Добавляем URL-адреса изображений к моковым данным
  const products = [...mockData];
  data.forEach((item, index) => {
    if (index < products.length) {
      products[index].image = item.image;
    }
  });

  return products;
};

export default getProducts;
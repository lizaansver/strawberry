import './Home.css'
import { Header } from '../header/Header'
import { CardItem } from './Card-item'
import { mockData } from '../../consts/mockData'

export const Home: React.FC = () => {
  // const [productsWithPhoto, setProductsWithPhoto] = useState<ProductProps[]>([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts()
  //     setProductsWithPhoto(products)
  //   }

  //   fetchProducts()
  // }, [])

  return (
    <>
      <Header />
      <div className="container">
        <h2>Миллионы товаров на ваш вкус</h2>
        <div className="card-list">
          {mockData.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

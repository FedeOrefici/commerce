import { useContext } from "react"
import { ContextData } from "../context/ContextData"


const Home = () => {

    const {products} = useContext(ContextData)
    
  return (
    <div>
      {products?.drinks?.map((product) => (
        <div key={product.idDrink}>
            <p>{product.strGlass}</p>
            <img src={product.strDrinkThumb} />
            <p>{product.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}

export default Home

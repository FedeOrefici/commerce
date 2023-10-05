import { useContext } from "react"
import { ContextData } from "../context/ContextData"
import Card from "../src/components/Card"


const Home = () => {

    const {products} = useContext(ContextData)
    
  return (
    <div className="w-full mt-10 flex items-center justify-center bg-blue-700 h-screen">
      <Card />
    </div>
  )
}

export default Home

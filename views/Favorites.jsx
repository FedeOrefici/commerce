import { useContext } from "react"
import { ContextData } from "../context/ContextData";
import Navbar from "../src/components/Navbar";
const Favorites = () => {

  const { favorites, delFavs } = useContext(ContextData)

  

  return (
    <div className="w-full h-screen mt-10">
    <Navbar />
        {favorites.length > 0 ? (favorites.map((fav) => (
          <div key={fav.id} className="bg-slate-300 w-[300px] h-[400px] border rounded p-4">
            <div onClick={() => delFavs(fav.id)} className="cursor-pointer">
              {fav ? <span>favorito</span>
              : <span>no favorito</span>} 
            </div>
            <p>{fav.name}</p>
            <img style={{width:'80px'}} src={fav.image} />
            <p className='p-2 w-full text-[12px]'>{fav.description}</p>
        </div>)
        )) : (<p>no favorites in your list</p>)}
    </div>
  )
}

export default Favorites

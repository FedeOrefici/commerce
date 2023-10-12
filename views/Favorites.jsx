import { useContext } from "react"
import { ContextData } from "../context/ContextData";
const Favorites = () => {

  const { favorites, delFavs, favs } = useContext(ContextData)

  

  return (
    <div className="w-full h-screen mt-10">
        {favorites.map((fav) => (
          <div key={fav.idDrink} className="bg-slate-300 w-[300px] h-[400px] border rounded p-4">
            <div onClick={() => delFavs(fav.idDrink)} className="cursor-pointer">
              {favs ? <span>favorito</span>
              : <span>no favorito</span>} 
            </div>
            <p>{fav.strGlass}</p>
            <img style={{width:'80px'}} src={fav.strDrinkThumb} />
            <p className='p-2 w-full text-[12px]'>{fav.strInstructions}</p>
        </div>
        ))}
    </div>
  )
}

export default Favorites

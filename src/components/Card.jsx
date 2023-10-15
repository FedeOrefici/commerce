import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextData'

const Card = () => {

    const {products, addFavs, favs, filteredData} = useContext(ContextData)

    const displayData = filteredData.length > 0 ? filteredData : products || []


  return (
    <div className='grid items-center justify-center grid-cols-3 gap-4 p-4'>
     {displayData?.drinks?.map((product) => (
        <div key={product.idDrink} className="bg-slate-300 w-[300px] h-[400px] border rounded p-4">
            <div onClick={()=> addFavs(product.idDrink)} className='cursor-pointer'>
              {product.idDrink === favs ? <span>favorito</span>
              : <span>no favorito</span>} 
            </div>
            <p>{product.strGlass}</p>
            <img style={{width:'80px'}} src={product.strDrinkThumb} />
            <p className='p-2 w-full text-[12px]'>{product.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}

export default Card

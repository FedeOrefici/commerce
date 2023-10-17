import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'
import Loader from './Loader'

const Card = () => {

    const {products, addFavs, favs, filteredData, isSearching} = useContext(ContextData)

    const displayData = filteredData.length > 0 ? filteredData : products || []


  return (
    <div className='grid items-center justify-center grid-cols-3 gap-4 p-4'>
     {isSearching ? (<Loader />) : (
      displayData?.map((product) => (
        <div key={product.id} className="bg-slate-300 w-[300px] h-[400px] border rounded p-4">
            <div onClick={()=> addFavs(product.id)} className='cursor-pointer'>
              {product.isFavorite ? <span>favorito</span>
              : <span>no favorito</span>} 
            </div>
            <p>{product.name}</p>
            <img style={{width:'80px'}} src={product.image} />
            <p className='p-2 w-full text-[12px]'>{product.description}</p>
        </div>
      ))) }
      
    </div>
  )
}

export default Card

import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'

const Card = () => {

    const {addFavs, isSearching, currentItems} = useContext(ContextData)

    

  return (
    <div className='flex items-center justify-center p-4 min-h-[600px]'>
     {isSearching ? (<Loader />) : (
      currentItems?.map((product) => (
        <div key={product.id} className="bg-slate-300 w-[300px] h-[200px] border rounded p-4">
            <div onClick={()=> addFavs(product.id)} className='cursor-pointer'>
              {product.isFavorite ? <span>favorito</span>
              : <span>no favorito</span>} 
            </div>
            <p>{product.name}</p>
            <img style={{width:'80px'}} src={product.image} />
            <p className='p-2 w-full text-[12px]'>{product.description.slice(0, 40)}...</p>
            <NavLink to={`/${product.id}`}>
              <button className='bg-violet-800 text-white rounded p-2 w-[150px]'>more</button>
            </NavLink>
        </div>
      ))) }
      
    </div>
  )
}

export default Card

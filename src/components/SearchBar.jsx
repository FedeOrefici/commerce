import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'

const SearchBar = () => {

  const {products, setFilteredData} = useContext(ContextData)
  
  const [searchDrink, setSearchDrink] = useState('')
  

  const handleSearch = () => {
    let filterData = products?.drinks?.map((prod) => prod.strGlass.toLowerCase().includes(searchDrink.toLowerCase()))
    console.log(filterData, 'aca busqueda');
    setFilteredData(filterData);
  }





  return (
    <div className='flex items-center justify-center w-[350px]'>
      <input onChange={(e) => setSearchDrink(e.target.value)} name='search' value={searchDrink} type='text' className='border p-2' />
      <button onClick={handleSearch} className='bg-slate-600 text-white p-2 rounded w-[150px]'>search</button>
    </div>
  )
}

export default SearchBar

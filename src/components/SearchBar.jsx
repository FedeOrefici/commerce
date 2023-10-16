import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'

const SearchBar = () => {

  const {products, setFilteredData, setIsSearching} = useContext(ContextData)
  
  const [searchDrink, setSearchDrink] = useState('')
  

  const handleSearch = () => {
    setIsSearching(true)
    
    let filterData = products?.drinks?.filter((prod) => 
    prod.strGlass.toLowerCase().includes(searchDrink.toLowerCase()))

    setFilteredData(filterData)
    
    setTimeout(() => {
      setIsSearching(false)
    }, 2000)
  }

  return (
    <div className='flex items-center justify-center w-[350px]'>
      <input onChange={(e) => setSearchDrink(e.target.value)} name='search' value={searchDrink} type='text' className='border p-2' />
      <button onClick={handleSearch} className='bg-slate-600 text-white p-2 rounded w-[150px]'>search</button>
    </div>
  )
}

export default SearchBar

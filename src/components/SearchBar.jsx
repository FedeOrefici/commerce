import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'

const SearchBar = () => {

  const {products, setIsSearching, setCurrentPage, setProducts, originalProducts} = useContext(ContextData)
  
  const [searchDrink, setSearchDrink] = useState('')
  

  const handleSearch = () => {
    setIsSearching(true)
    let filterData = products?.filter((prod) => prod.name.toLowerCase().includes(searchDrink.toLowerCase()))
    if(filterData.length === 0){
      setProducts(products)
    }
    setProducts(filterData)
    setSearchDrink('')
    setCurrentPage(1)
    setTimeout(() => {
      setIsSearching(false)
    }, 1500)
  }

  const handleReset = () => {
    setProducts(originalProducts)
    setSearchDrink('')
    setCurrentPage(1)
  }

  return (
    <div className='flex items-center justify-center w-1/2'>
      <input onChange={(e) => setSearchDrink(e.target.value)} name='search' value={searchDrink} type='text' className='border border-slate-400 p-2 w-1/2' />
      <button onClick={handleSearch} className='bg-slate-600 text-white p-2 rounded w-[150px]'>search</button>
      <button onClick={handleReset} className='bg-slate-600 text-white p-2 rounded w-[150px]'>reset</button>
    </div>
  )
}

export default SearchBar

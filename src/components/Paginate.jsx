import React, { useContext, useState } from 'react'
import { ContextData } from '../../context/ContextData'

const Paginate = () => {

    const {currentPage, setCurrentPage, totalPages} = useContext(ContextData)
   
    const handlePrev = () => {
        if (currentPage < 2) {return}
        setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
      if(currentPage < totalPages){
        setCurrentPage(currentPage + 1)
      }
    }

  return (
    <div className='bg-violet-500 text-yellow-400 w-full p-4 flex items-center justify-center gap-4'>
      <button onClick={handlePrev}>prev</button>
      <p>{currentPage}</p>
      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default Paginate

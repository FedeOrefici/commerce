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
    <div>
      <button onClick={handlePrev}>prev</button>
      <p>{currentPage}</p>
      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default Paginate

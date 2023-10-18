import React, { useState } from 'react'

const Paginate = () => {

    const [currentPage, setCurrentPage] = useState(1)


    const handlePrev = () => {
        if (currentPage < 2) {return}
        setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
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

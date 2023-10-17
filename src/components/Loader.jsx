import React from 'react'
import loader from '../assets/spinner-solid.svg'

const Loader = () => {
  return (

        <div className='w-[30px] h-[30px]rounded-full flex items-center justify-center mt-[100px]'>
          <img src={loader} className='animate-spin' />
        </div>


  )
}

export default Loader

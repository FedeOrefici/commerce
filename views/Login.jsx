import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home')
    }


  return (
    <div className='w-full h-[600px] border border-gray-950 flex items-center justify-center bg-[#7A293D]'>
      <form className='flex items-center justify-center flex-col mt-[100px] bg-red-400'>
        <input className='bg-red-500' type='text' placeholder='user' />
        <input className='bg-red-500' type='password' placeholder='password' />
        <button onClick={handleLogin} className='bg-slate-500 w-[100px] h-[30px]'>login</button>
      </form>
    </div>
  )
}

export default Login

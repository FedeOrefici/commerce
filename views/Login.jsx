import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home')
    }


  return (
    <div>
      <form>
        <input type='text' placeholder='user' />
        <input type='password' placeholder='password' />
        <button onClick={handleLogin}>login</button>
      </form>
    </div>
  )
}

export default Login

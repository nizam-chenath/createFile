import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home-page'>
        <button className='button' onClick={()=> navigate('/signup')}>Register</button>
        <button className='button' onClick={()=> navigate('/login')}>Login</button>
    </div>
  )
}

export default Home
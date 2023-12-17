import React from 'react'
import {useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/movies")
  }
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpaperaccess.com/full/1512225.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white ">Create Your Own Comfort Zone</h1>
          <p className="mb-5 text-gray-300">From seeing where to watch movies for free to keeping track of all the new movie releases, our easy-to-use guide is your go-to hub for all things movies.</p>
          <button onClick={handleClick} className="btn btn-info text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home
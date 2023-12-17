import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

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
      <h1 className="mb-5 text-5xl font-bold text-white">Watch The Latest Movies For Free</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button onClick={handleClick} className="btn btn-info text-white">Get Started</button>
    </div>
  </div>
</div>


  )
}

export default Home
import React from 'react'

const Watchlist = () => {
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpaperaccess.com/full/3658607.jpg)'}}>
          <div className="hero-overlay bg-opacity-60">
            <div>
          {/* passing the movie data which we receive from api to the movie card  */}
        </div>
          </div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Search For Your Movies</h1>
            </div>
          </div>
        </div> 

    </>
  )
}

export default Watchlist
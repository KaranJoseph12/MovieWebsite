import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'


const Watchlist = () => {
  let favoriteMovies = useSelector(state=>state.favorite.favorites)

  if(favoriteMovies.length >= 1){
    favoriteMovies = favoriteMovies.slice(1)
  }
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpaperaccess.com/full/3658607.jpg)'}}>
          <div className="hero-overlay bg-opacity-60">
            <div>
          {/* passing the movie data which we receive from api to the movie card  */}
         { favoriteMovies && < MovieCard movieData={favoriteMovies} isWatchListButtonDisabled={true}/>}
        </div>
          </div>
        </div> 

    </>
  )
}

export default Watchlist
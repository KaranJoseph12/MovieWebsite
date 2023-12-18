import React,{useState,useEffect} from 'react'
import {MovieCard} from './index'
import useMovieData from '../hooks/useMovieData';
import { useSelector } from 'react-redux';

const MovieList =  () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  
  const searchData = useSelector(state=>state.searchData)
  console.log(searchData);
  

  //using custom hook to get the movie data and pass them to  setMovies 
 const searchMovies = async (searchValue) => {
  try{
    const res = await useMovieData(searchValue)
    setMovie(res)
  }catch(e){
    console.log(e)
  }
 } 

useEffect(()=>{
  searchMovies(searchValue);
},[searchValue])

useEffect(()=>{
  setSearchValue(searchData)
},[searchData])

  return (
    <> 
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpaperaccess.com/full/3658597.jpg)'}}>
          <div className="hero-overlay bg-opacity-60">
            <div>
          {/* passing the movie data which we receive from api to the movie card  */}
          <MovieCard movieData = {movie} />
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

export default MovieList
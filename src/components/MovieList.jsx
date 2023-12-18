import React,{useState,useEffect} from 'react'
import {MovieCard} from './index'
import useMovieData from '../hooks/useMovieData';
import { useSelector } from 'react-redux';

const MovieList =  () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  
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
        <div>
         {/* passing the movie data which we receive from api to the movie card  */}
        <MovieCard movieData = {movie} />
        </div>
    </>
  )
}

export default MovieList
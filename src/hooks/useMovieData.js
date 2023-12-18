import React from 'react'
import axios from 'axios'

const useMovieData = async (value="") => {
  try{
    const res = await axios.get(`http://www.omdbapi.com/?s=${value}&apikey=65159faa&`)
    return res.data.Search
  }
  catch(err){
    console.log("there is an error",err); 
  }
  
}

export const getByID = async (id) => {
  try{
    const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=65159faa&`)
    return res.data
  }
  catch(err){
    console.log("there is an error",err); 
  }
}

 export default useMovieData;
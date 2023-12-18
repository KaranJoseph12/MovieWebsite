import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  favorites:[{}]

}


export const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers:{
   addFav:(state,actions)=>{
      const {Title,Year,imdbID,Poster}= actions.payload
      const favorite = {
        Title:Title,
        Year:Year,
        imdbID:imdbID,
        Poster: Poster
      }
      state.favorites.push(favorite)
   },
   removeFav:(state,actions)=>{
    state.favorites = state.favorites.filter(data => data.imdbID !== actions.payload) 
   }
}})

export const {addFav,removeFav} = favSlice.actions

export default favSlice.reducer
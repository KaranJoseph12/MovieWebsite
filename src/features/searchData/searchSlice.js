import { createSlice} from "@reduxjs/toolkit";

const initialState = {
   searchData: ""
}


export const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers:{
   sData:(state,actions)=>{
      state.searchData = actions.payload
   }
}})

export const {sData} = searchSlice.actions

export default searchSlice.reducer
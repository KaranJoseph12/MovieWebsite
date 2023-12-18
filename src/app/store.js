import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchData/searchSlice";
import favSlice from "../features/favorite/favSlice";


export const store = configureStore({
  reducer:{
    search:searchSlice,
    favorite:favSlice
  }
})
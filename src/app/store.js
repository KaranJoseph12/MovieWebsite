import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchData/searchSlice";


export const store = configureStore({
  reducer:searchSlice
})
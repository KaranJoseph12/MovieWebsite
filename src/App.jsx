import {Header,Footer } from "./components/index.js"

// import Header from "./components/Header";

import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <Header/>
      <Outlet/> 
      <Footer/>
    </>
  )
}
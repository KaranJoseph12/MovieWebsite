import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {MovieList,Watchlist,Home} from "./components/index.js"
import {store} from "./app/store.js"
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>}/>
      <Route path='/movies' element={<MovieList />}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

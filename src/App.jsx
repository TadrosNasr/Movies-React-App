import { Children, useState } from 'react'
import './App.css'
import MoviesProvider from './context/AppContext'
import Movies2 from './components/Movies2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Favourites from './components/Favourites'

function App() {
  
const router = createBrowserRouter([
  {
    path: "/", element:<Layout/>, children:[
      {path: 'movies', element:<Home/> , children:[
        {path:"",element:<Movies2/>},
        {path: ':id', element:<Details/>}]},
      {path: 'about', element:<About/>},
      {path: 'favourites', element:<Favourites/>},
      {path:"settings" ,element:<Settings/>},
      {path:"*" ,element:<NotFound></NotFound>}

    ]
  }
])

  return (
    <>
    
      {/* <MoviesProvider> */}
        <RouterProvider router={router} />
      {/* </MoviesProvider>     */}
      </>
  )
}

export default App;

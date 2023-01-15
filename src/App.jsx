import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Recipe from './pages/recipe/Recipe'
import Navbar from "./components/Navbar"

const app = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
    
  )
}

export default app

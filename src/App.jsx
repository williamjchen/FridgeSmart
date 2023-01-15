import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Recipe from './pages/recipe/Recipe'
import Navbar from "./components/Navbar"

// import background from "./background.jpg";

const app = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      
    </BrowserRouter>

    
  )
}

export default app

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Recipe from './pages/recipe/Recipe'
import Navbar from "./components/Navbar"
import Upload from './pages/upload/Upload'
import Background from './components/Background'

// import background from "./background.jpg";

const app = () => {
  return (
    <BrowserRouter>
      <Background/>
      <Navbar/>
    </BrowserRouter>

    
  )
}

export default app

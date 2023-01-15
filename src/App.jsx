import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Recipes from './pages/recipes/Recipes'
import Navbar from "./components/Navbar"
import Upload from './pages/upload/Upload'
import Background from './components/Background'

// import background from "./background.jpg";

const app = () => {
  return (
    <BrowserRouter>
      <Background/>
      <Navbar/>
      <Upload/>
    </BrowserRouter>

    
  )
}

export default app

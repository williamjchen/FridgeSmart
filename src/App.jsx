import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Recipes from './pages/recipes/Recipes'
import Navbar from "./components/Navbar"
import Upload from './pages/upload/Upload'
import Header from './components/Header'

// import background from "./background.jpg";

const app = () => {
  return (
    <BrowserRouter>
      <Background/>
      <Navbar/>
      <Header/>
      <Upload/>
    </BrowserRouter>

    
  )
}

export default app

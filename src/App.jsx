import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Recipes from './pages/recipes/Recipes'
import Navbar from "./components/Navbar"
import Upload from './pages/upload/Upload'
import Header from './components/Header'
import { render } from '@testing-library/react';

// import background from "./background.jpg";

const app = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Upload/>
    </BrowserRouter>
  )
}

export default app

import {Link} from 'react-router-dom'
import Image1 from '../images/plate.png'
import Image2 from '../images/robot.png'
import Pixel from '../images/logo.png'
import './header.css'

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <p className="introducing">Introducing...</p>
          <img className="fridgesmart"src={Pixel}/>
          <p className="description">
          Not sure what to do with random ingredients, scraps, and leftovers? Upload an image of your fridge and FridgeSmart will show you the recipes you can make!
          </p>  

        </div>
      
        <div className="main_header-right">
          <div className="main_header-image"> <img className="robot" src={Image2} alt=""/>
          </div>
          <div className="main_header-plate"> <img className="plate" src={Image1} alt=""/></div>
        </div>
      </div>
    </header>
  )
}

export default Header

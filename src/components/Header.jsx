import {Link} from 'react-router-dom'
import Image1 from '../images/plate.png'
import Image2 from '../images/robot.png'
import './header.css'

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <p>
        Not sure what to do with random ingredients, scraps, and leftovers? Upload an image of your fridge and FridgeSmart will show you the recipes you can make!
        </p>  
      </div>
      <div className="main_header-right">
        <div className="main_header-plate"> <img src={Image1} alt=""/></div>
        <div className="main_header-image"> <img src={Image2} alt=""/>
        </div>
      </div>
    </header>
  )
}

export default Header

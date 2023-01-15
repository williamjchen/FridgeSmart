import './navbar.css'
import Logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='logo'>
          <p> FridgeSmart</p>
        </Link>
        <ul className='nav_links'>
        <li>
            <NavLink to='./pages/recipes'><a href="" className="btn1"><img className="logo1"src={Icon1}/>Home</a></NavLink>
          </li>
          <li>
            <NavLink to='./pages/recipes'><a href="" className="btn2"><img className="logo2"src={Icon2}/>Recipe</a></NavLink>
          </li>
          <li>
            <NavLink to='./pages/recipes'><a href="" className="btn1"><img className="logo1"src={Icon3}/>Recipe</a></NavLink>
          </li>
        </ul>

        <button className="nav_toggle-btn">
          <GoThreeBars/>
        </button>

      </div>
    </nav>
  )
}

export default Navbar

import './navbar.css'
import Logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='logo'>
          <p> FridgeSmart</p>
        </Link>
        <ul className='nav_links'>
          <li>
            <NavLink to='./pages/recipes'>Recipe</NavLink>
          </li>
          <li>
            <NavLink to='./pages/recipes'>Recipe</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

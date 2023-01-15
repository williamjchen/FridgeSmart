import './navbar.css'
import Logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import FS from '../images/fs.png'
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <div className="nav_title">
        
        <Link to="/" className='title'>
          <img src={FS} className="main-logo"/>
        </Link>
        </div>
        <ul className='nav_links'>
        <li>
            <NavLink to='./pages/recipes'><a href="" className="btn"><img className="logo1"src={Icon1}/><p>Home</p></a></NavLink>
            
          </li>
          <li>
            <NavLink to='./pages/recipes'><a href="#upload_id" className="btn"><img className="logo2" src={Icon2}/><p>Upload Image</p></a></NavLink>
          </li>
          <li>
            <NavLink to='./pages/recipes'><a href="" className="btn"><img className="logo3"src={Icon3}/><p className="header">Recipe</p></a></NavLink>
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

import { Link,NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import './Header.css'

 
function Header() {
    return ( <div className="HeaderContainer">
        <Link to="/">
        <img className="HeaderImage" src={logo} alt=""/>
        </Link>
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active StyledLink" : "StyledLink"} to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active StyledLink" : "StyledLink"} to="/propos">A Propos</NavLink>
        </nav>
        </div>
    )
}

export default Header
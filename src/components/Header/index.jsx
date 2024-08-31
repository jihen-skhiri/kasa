import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import '../../styles/Header.css'

 
function Header() {
    return ( <div className="HeaderContainer">
        <Link to="/">
        <img className="HeaderImage" src={logo} alt=""/>
        </Link>
        <nav>
            <Link className="StyledLink" to="/">Accueil</Link>
            <Link className="StyledLink" to="/propos">A Propos</Link>
        </nav>
        </div>
    )
}

export default Header
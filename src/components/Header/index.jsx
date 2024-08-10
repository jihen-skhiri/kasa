import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
 
function Header() {
    return ( <div className="HeaderContainer">
        <img className="HeaderImage" src={logo} alt=""/>
        <nav>
            <Link className="StyledLink" to="/">Accueil</Link>
            <Link className="StyledLink" to="/propos">A Propos</Link>
        </nav>
        </div>
    )
}

export default Header
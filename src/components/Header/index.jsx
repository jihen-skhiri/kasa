import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import styled from 'styled-components'

const HeaderContainer = styled.div`
   display:flex;
   justify-content: space-between;
   align-items:center;
   margin:40px;

`
const HeaderImage = styled.img`
    height: 68px;
    width: 210px;
    
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: #000000;
    text-decoration: none;
    font-size: 24px;
    text-align: right;
`


 
function Header() {
    return ( <HeaderContainer>
        <HeaderImage src={logo} alt=""/>
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/propos">A Propos</StyledLink>
        </nav>
        </HeaderContainer>
    )
}

export default Header
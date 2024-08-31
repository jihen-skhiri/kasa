import logoFoot from "../../assets/images/LOGO-foot.png";
import '../../styles/Footer.css'
function Footer() {
    return ( <footer className="styleFooter">
      <div className='img_footer'> <img src={logoFoot} alt=""/></div> 
      <div className='text_footer'>  <p>© 2020 Kasa. All rights reserved</p></div> 
        </footer>
    )
}

export default Footer
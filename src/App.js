import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Banner.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './components/Routes'




const App=()=> {
  return (
  
   <BrowserRouter>
     
     <Header />
            
      <Router />
     <Footer />       
            
    </BrowserRouter>  

)
}
export default App;



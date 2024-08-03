import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Banner.css'
import Home from './pages/Home';
import Propos from './pages/Propos';
import Details from './pages/Details';
import Error from './pages/Error';
import Header from './components/Header'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="*" element={<Error />} />
                <Route path="/details" element={<Details />} />
            </Routes>
      <Footer />
      </Router>
  </React.StrictMode>
);



import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import History from './History';
import Photos from './Photos';
import Reviews from './Reviews';
import About from './About';
import PageNotFound from './404';
import NavTab from '../Nav';
import Foot from '../Foot';
import './About.css'; // Import your custom CSS file here

const Layout = () => {
  return (
    <Router>
      <NavTab />
      <hr className="glowing-hr" style={{height: '2px'}} /> 
      <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/home" element={<Home />}  />
              <Route path="/history" element={<History />}  />
              <Route path="/photos" element={<Photos />}  />
              <Route path="/reviews" element={<Reviews />}  />
              <Route path="/about" element={<About />}  />
              <Route path="/404" element={<PageNotFound />}  />
              <Route path="*" element={<Navigate to="/404" />}  />
      </Routes>
      <Foot />
    </Router>
  )
}

export default Layout
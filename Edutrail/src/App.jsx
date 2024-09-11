import React from 'react';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/Home';
import About from './components/About'; 
import Signup from './components/Signup';
import './index.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />  
          <Route path="/feedback" element={<Feedback />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

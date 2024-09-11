import React from 'react';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Home';
import About from './components/About'; 
import Signup from './components/Signup';
import './index.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Analytics from './components/Analytics';
import Aboutpage from './components/Abouts';
import Resource from './components/Resources';

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
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/abouts" element={<Aboutpage />}/>
          <Route path="/resources" element={<Resource />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Landing />
      <Aboutpage />
    </div>
  );
};

export default App;
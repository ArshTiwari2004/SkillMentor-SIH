import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cyan-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <img 
          src="logo.png" 
          alt="logo" 
          className="h-12 w-auto object-contain" 
        />
        <h1 className="text-white text-3xl font-bold">SkillMentor</h1>

        <div className="flex items-center space-x-4">
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/resources">Resources</Link>
          <Link className="text-white" to="/about">About</Link>
          <Link className="text-white" to="/contact">Contact</Link>
          <Link className="text-white" to="/signin">Sign In</Link>
          <Link className="bg-cyan-200 text-cyan-900 px-4 py-2 rounded-md" to="/signup">Sign Up</Link>
          <Link className="border border-cyan-200 text-white px-4 py-2 rounded-md" to="/try-free">Try for Free</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
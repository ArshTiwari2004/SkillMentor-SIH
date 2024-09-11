import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className=" bg-cyan-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <img src="../assets/logo.png" alt="logo" classname="h-16 w-16 object-contain"></img>
        <h1 className="text-white text-xl font-bold">SkillMentor</h1>

        <div className="flex items-center">
          <Link className="text-white mx-4" to="/">Home</Link>
          <Link className="text-white mx-4" to="/resources">Resources</Link>
          <Link className="text-white mx-4" to="/about">About</Link>
          <Link className="text-white mx-4" to="/contact">Contact</Link>
          <Link className="text-white 0 mx-4" to="/signin">Sign In</Link>
          <Link className="bg-cyan-400 text-white px-4 py-2 rounded-md mx-4" to="/signup">Sign Up</Link>
          <Link className="border border-cyan-400  text-white px-4 py-2 rounded-md mx-4" to="/try-free">Try for Free</Link>
         
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

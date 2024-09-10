// Header.js

import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Heading */}
        <div className="flex items-center">
          <img
            src="../assets/logo.png"
            alt="Edutrail Logo"
            className="h-12 w-12 mr-4"
          />
          <h1 className="text-white text-3xl font-bold">Edutrail</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-white font-semibold">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#career-features" className="hover:text-gray-300">
                Career Features
              </a>
            </li>
            <li>
              <a href="#leaderboard" className="hover:text-gray-300">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#flowchart" className="hover:text-gray-300">
                Career Flowchart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

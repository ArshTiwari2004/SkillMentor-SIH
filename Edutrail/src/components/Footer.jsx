// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
       ?// About us section
        <div>
          <h3 className="text-lg font-bold">About Edutrail</h3>
          <p className="text-sm">
         EduTrail is a learning website that offers career paths with study materials (PDFs, videos, etc.) in Hindi and English. It has interactive quizzes, assignments, badges, and ranks. It also provides top university syllabuses, tracks learning time, gives certificates, and assigns mentors for doubt sessions. Users can collaborate on projects, and the platform integrates with Google Classroom and MS Teams for easy student-teacher interaction.</p>
        </div>

        // Navigation link
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li>
              <a href="#career-features" className="hover:text-blue-400">
                Career Features
              </a>
            </li>
            <li>
              <a href="#leaderboard" className="hover:text-blue-400">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#flowchart" className="hover:text-blue-400">
                Career Flowchart
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        // contact us
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-sm">
            Email: contact@edutrail.com <br />
            Phone: 9878435678
          </p>
        </div>

        // follow us section
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </div>

      // footer bottom
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Edutrail. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

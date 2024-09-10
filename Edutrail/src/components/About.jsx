import React from 'react';
import { FaRocket, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
    
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            Discover more about our mission, vision, and what sets us apart in the world of online learning.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between">
        
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
            <div className="flex items-center justify-center mb-4">
              <FaRocket className="text-blue-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Learning Paths</h3>
            <p className="text-gray-700">
              Experience tailored learning paths that adapt to your needs and pace. Our platform offers personalized recommendations to help you achieve your goals efficiently.
            </p>
          </div>

    
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
            <div className="flex items-center justify-center mb-4">
              <FaChalkboardTeacher className="text-green-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
            <p className="text-gray-700">
              Learn from industry experts and experienced instructors. Our platform connects you with knowledgeable mentors who provide guidance and support throughout your learning journey.
            </p>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3">
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="text-red-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborative Learning</h3>
            <p className="text-gray-700">
              Engage with a vibrant community of learners. Participate in discussions, join study groups, and work on collaborative projects to enhance your learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

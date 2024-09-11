import React from 'react';
import TypingEffect from 'react-typing-effect';
import { FaLock, FaChartBar, FaFileAlt } from 'react-icons/fa';

const Aboutpage = () => {
  return (
    <div className="py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">About SkillMentor </h2>
        <TypingEffect
          text={['Study smart, play your part, achieve art!']}
          className="text-2xl font-semibold text-black-200"
        />
        <p className="mt-6 text-lg text-black-200 max-w-2xl mx-auto">
        Welcome to Skillmentor – your all-in-one hub for every career path. Learn, collaborate, and earn certificates with our multilingual platform and diverse resources!
        </p>

        {/* Feature Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Box 1: Secure User Roles */}
          <div className="bg-cyan-200 shadow-xl rounded-xl p-6">
            <FaLock className="text-4xl text-cyan-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaboartive Learning</h3>
            <p className="text-gray-700">
            Learn better by working with peers—share ideas, solve challenges, and grow together.
            </p>
          </div>

          {/* Box 2: Data Visualization */}
          <div className="bg-cyan-200 shadow-xl rounded-xl p-6">
            <FaChartBar className="text-4xl text-cyan-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Time Analysis & Visualization</h3>
            <p className="text-gray-700">
            Track your time for each skill, with insights to boost learning, optimize growth, and reach your goals confidently.
            </p>
          </div>

          {/* Box 3: Report Generation */}
          <div className="bg-cyan-200 shadow-xl rounded-xl p-6">
            <FaFileAlt className="text-4xl text-cyan-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
            <p className="text-gray-700">
            Access video content in multiple languages, like Hindi or English, to overcome language barriers and reinforce your learning effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutpage;

import React from 'react';
import { FaChartLine, FaBook, FaClock, FaUser, FaSearch, FaCog } from 'react-icons/fa';

const analyticsData = {
  readingTime: '35h 12m',
  topicsCovered: 56,
  totalCourses: 30,
  learners: 234,
};

const Analytics = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center h-16 px-4 border-b bg-white shadow-md">
        <nav className="flex flex-grow items-center justify-between">
          <div className="flex items-center gap-6 text-lg font-medium">
            <a href="#" className="text-blue-500 font-semibold">Dashboard</a>
            <a href="#" className="text-gray-700">Courses</a>
            <a href="#" className="text-gray-700">Resources</a>
            <a href="#" className="text-gray-700">Analytics</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search analytics..."
                className="pl-8 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col p-4 md:p-10">
        <h1 className="text-3xl font-semibold mb-6">Analytics Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Reading Time */}
          <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaClock className="text-blue-500 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Total Reading Time</h2>
              <p className="text-gray-700 text-lg">{analyticsData.readingTime}</p>
            </div>
          </div>
          {/* Topics Covered */}
          <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaBook className="text-green-500 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Topics Covered</h2>
              <p className="text-gray-700 text-lg">{analyticsData.topicsCovered}</p>
            </div>
          </div>
          {/* Total Courses */}
          <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaChartLine className="text-orange-500 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Total Courses</h2>
              <p className="text-gray-700 text-lg">{analyticsData.totalCourses}</p>
            </div>
          </div>
          {/* Learners */}
          <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
            <FaUser className="text-purple-500 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Total Learners</h2>
              <p className="text-gray-700 text-lg">{analyticsData.learners}</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Performance Charts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Chart 1 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img src="increase-graph.png" alt="Performance Chart 1" className="w-full h-60 object-contain   rounded-xl" />
              <p className="mt-2 text-gray-700">Performance Overview</p>
            </div>
            {/* Chart 2 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img src="graph.png" alt="Performance Chart 2" className="w-full h-60 object-contain rounded-xl" />
              <p className="mt-2 text-gray-700">Learner Progress</p>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-10 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="flex items-center gap-4">
            <FaCog className="text-gray-500 text-3xl" />
            <p className="text-gray-700">Adjust your analytics settings here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
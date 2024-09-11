import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center h-16 px-4 border-b bg-white shadow-md">
        <nav className="flex flex-grow items-center justify-between">
          <div className="flex items-center gap-6 text-lg font-medium">
          <Link to="/dashboard" className="text-cyan-950 font-semibold">Dashboard</Link>
          <Link to="/courses" className="text-cyan-950">Courses</Link>
          <Link to="/resources" className="text-cyan-950">Resources</Link>
          <Link to="/analytics" className="text-cyan-950">Analytics</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search courses..."
                className="pl-8 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21L16.7 16.7" />
              </svg>
            </div>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col p-4 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Progress Tracker Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between pb-2 border-b">
              <h2 className="text-sm font-medium">Progress Tracker</h2>
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">75%</div>
                  <p className="text-xs text-gray-500">Overall Progress</p>
                </div>
                <div className="w-32 h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-lg font-bold">2 weeks</div>
                  <p className="text-xs text-gray-500">Estimated Completion</p>
                </div>
                <div className="text-lg font-bold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  2w
                </div>
              </div>
            </div>
          </div>

          {/* Reading Statistics Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between pb-2 border-b">
              <h2 className="text-sm font-medium">Reading Statistics</h2>
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">12 hrs</div>
                  <p className="text-xs text-gray-500">Total Time Spent</p>
                </div>
                <div className="text-lg font-bold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  12h
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-lg font-bold">45%</div>
                  <p className="text-xs text-gray-500">Comprehension Rate</p>
                </div>
                <div className="w-32 h-2 bg-green-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          {/* Resource Management Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between pb-2 border-b">
              <h2 className="text-sm font-medium">Resource Management</h2>
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
              </svg>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">42</div>
                  <p className="text-xs text-gray-500">Total Resources</p>
                </div>
                <button className="px-4 py-2 border rounded-md border-gray-300 hover:bg-gray-100">Manage</button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-lg font-bold">12</div>
                  <p className="text-xs text-gray-500">Pending Uploads</p>
                </div>
                <button className="px-4 py-2 border rounded-md border-gray-300 hover:bg-gray-100">Upload</button>
              </div>
            </div>
          </div>
        </div>

        {/* Personalized Learning Data Card */}
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-sm font-medium">Personalized Learning Data</h2>
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 13a9 9 0 0 1-18 0V5a9 9 0 0 1 18 0v8z" />
              <path d="M13 16h-2v-4h2v4z" />
            </svg>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">Advanced Topics</div>
                <p className="text-xs text-gray-500">Focus Area</p>
              </div>
              <div className="text-lg font-bold flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                3h
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-lg font-bold">Review Sessions</div>
                <p className="text-xs text-gray-500">Next Session</p>
              </div>
              <div className="text-lg font-bold flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                1d
              </div>
            </div>

            {/* Additional Fields */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">Goals Achieved</div>
                  <p className="text-xs text-gray-500">Milestones</p>
                </div>
                <div className="text-lg font-bold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  8/10
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-lg font-bold">Upcoming Events</div>
                  <p className="text-xs text-gray-500">Next Event</p>
                </div>
                <div className="text-lg font-bold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  3d
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-lg font-bold">Current Focus</div>
                  <p className="text-xs text-gray-500">Primary Task</p>
                </div>
                <div className="text-lg font-bold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Module X
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
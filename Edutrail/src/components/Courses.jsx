import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Digital Marketing ', image: 'dm.png' },
  { id: 2, title: 'Graphic Designing', image: 'gd.png' },
  { id: 3, title: 'Economics', image: 'economics.jpg' },
  { id: 4, title: 'Business Analyst', image: 'Ba.jpg' },
  { id: 5, title: 'Social Media Marketing', image: 'sm.jpg' },
  { id: 6, title: 'Indian Constitution', image: 'ic2.jpg' },
  { id: 7, title: 'Fashion Designing', image: 'fashion.jpg' },
  { id: 8, title: 'Interior Designing', image: 'id.jpg' },
  { id: 9, title: 'Philosphy', image: 'download.png' },
  { id: 10, title: 'Entrepreneurship', image: 'en.jpg' },
  { id: 11, title: 'Web Development', image: 'wd.jpg' },
  { id: 12, title: 'Artificial Intelligence', image: 'AI.jpg' },
  { id: 13, title: 'Data Science', image: 'data.png' },
  { id: 14, title: 'Machine Learning', image: 'ML.jpg' },
  { id: 15, title: 'Blockchain Technology', image: 'bt.jpg' },
  { id: 16, title: 'Cyber Security', image: 'cs.jpg' },
  { id: 17, title: 'Cloud Computing', image: 'cc.jpg' },
  { id: 18, title: 'DevOps', image: 'devops.jpeg' },
  { id: 19, title: 'Database Management', image: 'dbms.jpg' },
  { id: 20, title: 'Internet of Things', image: 'iot.jpg' },
  { id: 21, title: 'Software Engineering', image: 'SE.png' },
  { id: 22, title: 'Game Development', image: 'Gd.jpg' },
  { id: 23, title: 'Mobile App Development', image: 'ma.png' },
  { id: 24, title: 'Big Data', image: 'bigdata.jpg' },
  { id: 25, title: 'Human-Computer Interaction', image: 'hr.png' },
  { id: 26, title: 'Virtual Reality', image: 'VR.jpg' },
  { id: 27, title: 'Augmented Reality', image: 'Ar.jpeg' },
  { id: 28, title: 'Algorithms & Data Structures', image: 'ds.png' },
  { id: 29, title: 'Computer Networks', image: 'cn.jpg' },
  { id: 30, title: 'Operating Systems', image: 'os.jpg' },
  

  
  
  
];

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center h-16 px-4 border-b bg-white shadow-md">
        <nav className="flex flex-grow items-center justify-between">
          <div className="flex items-center gap-6 text-lg font-medium">
            <a href="#" className="text-cyan-900 font-semibold">Dashboard</a>
            <a href="#" className="text-cyan-900">Courses</a>
            <a href="#" className="text-cyan-900">Resources</a>
            <a href="#" className="text-cyan-900">Analytics</a>
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
        
          </div>
        </nav>
      </header>

      
      <main className="flex flex-1 flex-col p-4 md:p-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Here are the courses we offer</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map(course => (
            <div key={course.id} className="bg-white border border-cyan-950 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
              <Link to="/resources">
                <button className="w-full py-2 px-4 bg-cyan-900 text-white rounded-md hover:bg-cyan-500 transition-colors duration-300">
                  View Resources
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
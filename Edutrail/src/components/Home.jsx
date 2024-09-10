import React from "react";

function LandingPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className=" px-10 md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Learning Platform
          </h2>
          <p className="text-gray-600 mb-6">
            We provide a unique learning experience with personalized learning
            paths, real-time progress tracking, and interactive courses. Whether
            you're a beginner or an advanced learner, we've got something for
            everyone.
          </p>
          <p className="text-gray-600">
            Start your journey today and explore a variety of free and paid
            resources, earn certificates, and connect with mentors from top
            universities.
          </p>
        </div>

    
        <div className=" bg-white md:w-1/2">
          <img
            src="/learning.gif"
            alt="Learning platform animation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

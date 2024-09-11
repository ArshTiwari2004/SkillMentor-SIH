import React from "react";

function LandingPage() {
  return (
    <div className="bg-white py-12">l fo
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className=" px-10 md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold  font-serif text-gray-800 mb-4">
            Welcome to Our Learning Platform
          </h2>
          <p className="text-black mb-6 font-sans">
            We provide a unique learning experience with personalized learning
            paths, real-time progress tracking, and interactive courses. Whether
            you're a beginner or an advanced learner, we've got something for
            everyone!
          </p>
          <p className="text-black font-sans ">
            Start your journey today and explore a variety of free and paid
            resources, earn certificates, and connect with mentors from top
            universities.
          </p>
        </div>

    
        <div className=" bg-white md:w-1/2">
          <img
            src="/learning.gif"
            alt="Learning platform animation"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

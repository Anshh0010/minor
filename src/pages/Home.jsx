import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

const Home = () => {
  const bg = require("../assets/Images/home.jpeg");

  return (
    <>
      <div className="relative min-h-screen ">
        <img src={bg} className="absolute w-full h-full z-[-1]" />
        {/* Hero Section */}
        <section className="px-4 py-20 text-center text-white bg-black bg-opacity-60">
          <h2 className="mb-4 text-4xl font-bold uppercase">
            Unlocking Career Pathways
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-lg">
            Discover the best educational streams and start your journey towards
            a fulfilling career.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("subjects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 font-bold text-white transition-all duration-300 bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Explore Streams
          </button>
        </section>

        {/* Subjects Section */}
        <section id="subjects" className="px-4 py-16 bg-white bg-opacity-90">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Discover Your Perfect Career Path
          </h2>
          
          {/* New Features Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to={PathConstants.APTITUDE}
                className="group p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🧠</div>
                  <h3 className="text-xl font-bold mb-2">Aptitude Test</h3>
                  <p className="text-sm opacity-90">Discover your ideal career stream through our comprehensive assessment</p>
                </div>
              </Link>
              
              <Link
                to={PathConstants.CAREERPATHS}
                className="group p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🛤️</div>
                  <h3 className="text-xl font-bold mb-2">Career Roadmaps</h3>
                  <p className="text-sm opacity-90">Explore detailed career journeys from 12th grade to success</p>
                </div>
              </Link>
              
              <Link
                to={PathConstants.COLLEGEMAP}
                className="group p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🏫</div>
                  <h3 className="text-xl font-bold mb-2">Find Colleges</h3>
                  <p className="text-sm opacity-90">Discover government colleges near your location</p>
                </div>
              </Link>
              
              <Link
                to={PathConstants.TIMELINE}
                className="group p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="text-xl font-bold mb-2">Timeline Tracker</h3>
                  <p className="text-sm opacity-90">Never miss important deadlines and exam dates</p>
                </div>
              </Link>
            </div>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-center text-gray-700">
            Or Browse by Subject Stream
          </h2>
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {/* Science Card */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Science</h3>
              <p className="mb-6 text-gray-600">
                Explore careers in Medicine, Physics, Chemistry, and Biological
                Sciences. Perfect for analytical minds who love exploring the
                natural world.
              </p>
              <Link
                to={PathConstants.SCIENCE}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
              >
                Learn More
              </Link>
            </div>
            {/* Commerce Card */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Commerce
              </h3>
              <p className="mb-6 text-gray-600">
                Dive into careers in Business, Finance, Accounting, and
                Economics. Ideal for students interested in the corporate world
                and financial markets.
              </p>
              <Link
                to={PathConstants.COMMERCE}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
              >
                Learn More
              </Link>
            </div>
            {/* Technology Card */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Technology
              </h3>
              <p className="mb-6 text-gray-600">
                Pursue careers in IT, Software Development, Artificial
                Intelligence, and Cybersecurity. Great for problem-solvers and
                tech enthusiasts.
              </p>
              <Link
                to={PathConstants.TECHNOLOGY}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
              >
                Learn More
              </Link>
            </div>
            {/* Arts Card */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Arts</h3>
              <p className="mb-6 text-gray-600">
                Explore careers in Literature, History, Music, and Performing
                Arts. Perfect for creative minds and those passionate about
                culture and expression.
              </p>
              <Link
                to={PathConstants.ARTS}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
              >
                Learn More
              </Link>
            </div>
            {/* Design Card */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Design</h3>
              <p className="mb-6 text-gray-600">
                Dive into Graphic Design, Interior Design, Fashion, and Product
                Design. Ideal for students who love creativity, aesthetics, and
                innovation.
              </p>
              <Link
                to={PathConstants.DESIGN}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

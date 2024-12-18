import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import bg from "../assets/Images/hero/1.jpg";

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-md">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <Link
            to={PathConstants.ABOUT}
            className="text-2xl font-bold text-white"
          >
            Career <span className="text-blue-500">Guidance</span>
          </Link>
          <div className="flex space-x-6">
            <Link
              to={PathConstants.ABOUT}
              className="text-white transition hover:text-orange-500"
            >
              HOME
            </Link>
            <a
              href="#contact"
              className="text-white transition hover:text-orange-500"
            >
              CONTACTS
            </a>
            <Link
              to={PathConstants.LOGIN}
              className="text-white transition hover:text-orange-500"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-start justify-center h-screen px-10 text-white bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h2 className="mb-6 text-5xl font-bold">
          Tomorrow Looks Better Because We're{" "}
          <span className="text-orange-500">Here to Help You</span> Choose Your
          Career Track.
        </h2>
        <a href="#about">
          <button className="px-6 py-2 text-white bg-orange-500 rounded-md hover:bg-black">
            About Career <span className="text-blue-500">Guidance</span>
          </button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-200">
        <div className="container px-6 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
            Who <span className="text-orange-500">We Are</span>
          </h2>
          <p className="mb-6 text-lg text-center text-gray-700">
            Career Guidance is a webpage that offers insights into life, social,
            and school skills. We provide world-class advice on career choices
            based on interests, IQ, and stable future opportunities. Join us for
            a blissful experience navigating life after high school.
          </p>
          <div className="text-center">
            <a href="login.html">
              <button className="px-6 py-2 text-white bg-gray-900 rounded-md hover:bg-black">
                Let's Begin
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
};

export default About;

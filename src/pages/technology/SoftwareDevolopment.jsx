import React from "react";
import PathConstants from "../../routes/PathConstants";
import { Link } from "react-router-dom";

const SoftwareDevolopment = () => {
  return (
    <div
      className="relative z-0 font-sans text-gray-900 bg-fixed bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/shutterstock/photos/2164419735/display_1500/stock-vector-set-of-business-objects-open-pages-landing-page-template-folder-mail-statistics-d-web-vector-2164419735.jpg')",
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-10 py-5 text-white bg-black bg-opacity-70">
        <h1 className="text-3xl text-center">
          Explore Software Devolopment Courses
        </h1>
        <nav>
          <ul className="flex justify-center mt-4 space-x-6">
            <li>
              <Link
                to={PathConstants.HOME}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={PathConstants.TECHNOLOGY}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to={PathConstants.SEARCH}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                College List
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Introduction Section */}
      <section className="max-w-screen-md p-10 mx-auto my-10 text-center bg-white rounded-lg bg-opacity-80">
        <h2 className="text-2xl text-red-600">
          Why Choose a Career in Software Development?
        </h2>
        <p className="mt-4 text-gray-700">
          Software Development is a dynamic field that combines problem-solving,
          creativity, and technology. Explore various undergraduate and
          postgraduate courses in Software Development and learn about the
          entrance exams required for admission.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="p-10">
        <h2 className="mb-6 text-2xl text-center text-gray-800">
          Relevant Software Development Courses and Entrance Exams
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Bachelor of Technology (B.Tech) in Computer Science
            </h3>
            <p className="mb-4 text-gray-700">
              An undergraduate program covering programming, algorithms, and
              software engineering.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>JEE Main:</strong> Joint Entrance Examination -
                Tentative Date: April
              </p>
              <p>
                <strong>BIT SAT:</strong> Birla Institute of Technology and
                Science Admission Test - Tentative Date: May
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Master of Computer Applications (MCA)
            </h3>
            <p className="mb-4 text-gray-700">
              A postgraduate program focusing on advanced software development,
              data structures, and computer science applications.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>NIMCET:</strong> NIT MCA Common Entrance Test -
                Tentative Date: May
              </p>
              <p>
                <strong>IPU CET:</strong> Indraprastha University Common
                Entrance Test - Tentative Date: April
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Diploma in Software Engineering
            </h3>
            <p className="mb-4 text-gray-700">
              A course providing foundational knowledge in software development,
              coding, and database management.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>Polytechnic Entrance Exams:</strong> State-level exams -
                Tentative Dates: April to June
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Ph.D. in Computer Science
            </h3>
            <p className="mb-4 text-gray-700">
              A doctoral program focused on research in advanced algorithms,
              artificial intelligence, and software innovation.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>UGC NET:</strong> University Grants Commission National
                Eligibility Test - Tentative Date: December
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="p-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-6 text-2xl text-red-600">
          Ready to Start Your Software Development Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-6 py-3 text-white transition bg-red-600 rounded-md hover:bg-red-700"
        >
          Find Software Development Colleges
        </button>
      </section>
    </div>
  );
};

export default SoftwareDevolopment;

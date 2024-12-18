import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const DataScience = () => {
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
      <section className="max-w-3xl px-5 py-10 mx-auto my-10 text-center bg-white rounded-lg bg-opacity-80">
        <h2 className="text-2xl font-semibold text-red-500">
          Why Choose a Career in Data Science?
        </h2>
        <p className="mt-4 text-gray-600">
          Data Science combines statistical and computational skills to extract
          insights from data. Explore various undergraduate and postgraduate
          courses in Data Science and learn about the entrance exams required
          for admission.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="px-5 py-10">
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">
          Relevant Data Science Courses and Entrance Exams
        </h2>
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Bachelor of Science (B.Sc.) in Data Science
            </h3>
            <p className="mt-3 text-gray-600">
              An undergraduate program focusing on data analysis, machine
              learning, and statistical techniques.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>CUET:</strong> Common University Entrance Test -
                Tentative Date: May
              </p>
              <p>
                <strong>IPU CET:</strong> Indraprastha University Common
                Entrance Test - Tentative Date: April
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Master of Data Science (M.Sc.)
            </h3>
            <p className="mt-3 text-gray-600">
              A postgraduate course specializing in big data analytics,
              predictive modeling, and AI applications.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>GATE:</strong> Graduate Aptitude Test in Engineering -
                Tentative Date: February
              </p>
              <p>
                <strong>JNU CEEB:</strong> Jawaharlal Nehru University Combined
                Entrance Exam - Tentative Date: May
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Diploma in Data Science
            </h3>
            <p className="mt-3 text-gray-600">
              A course that provides foundational knowledge in data management,
              visualization, and statistical analysis.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>Polytechnic Entrance Exams:</strong> State-level exams -
                Tentative Dates: April to June
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Ph.D. in Data Science
            </h3>
            <p className="mt-3 text-gray-600">
              A doctoral program focused on cutting-edge research in machine
              learning, deep learning, and data mining.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>UGC NET:</strong> University Grants Commission National
                Eligibility Test - Tentative Date: December
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-5 py-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Ready to Start Your Data Science Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-400"
        >
          Find Data Science Colleges
        </button>
      </section>
    </div>
  );
};

export default DataScience;

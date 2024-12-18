import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const Literature = () => {
  return (
    <div
      className="relative z-0 font-sans text-gray-900 bg-fixed bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-10 py-5 text-white bg-black bg-opacity-70">
        <h1 className="text-3xl text-center">Explore Fine arts Courses</h1>
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
                to={PathConstants.ARTS}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Arts
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
          Why Choose Literature?
        </h2>
        <p className="mt-4 text-gray-600">
          Literature courses explore the beauty and power of written works, from
          ancient texts to modern novels. Learn about the diverse programs in
          literary analysis, creative writing, and critical theory, along with
          entrance exams for top institutes.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="px-5 py-10">
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">
          Relevant Literature Courses and Entrance Exams
        </h2>
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Bachelor of Arts in Literature (BA)
            </h3>
            <p className="mt-3 text-gray-600">
              An undergraduate program in literary studies, exploring genres,
              authors, and themes.
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
                <strong>BHU UET:</strong> Banaras Hindu University Undergraduate
                Entrance Test - Tentative Date: April
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Master of Arts in Literature (MA)
            </h3>
            <p className="mt-3 text-gray-600">
              A postgraduate course focusing on advanced topics in literary
              theory, criticism, and creative writing.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>DUET:</strong> Delhi University Entrance Test -
                Tentative Date: June
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Diploma in Creative Writing
            </h3>
            <p className="mt-3 text-gray-600">
              An introductory program for those interested in developing their
              writing skills in fiction, poetry, and more.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>IGNOU Entrance Test:</strong> Entrance for Creative
                Writing - Tentative Date: July
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Ph.D. in Literature
            </h3>
            <p className="mt-3 text-gray-600">
              An advanced research program for those interested in contributing
              to the field of literary studies.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>UGC NET:</strong> National Eligibility Test for
                Literature - Tentative Date: December
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-5 py-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Ready to Start Your Literature Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-400"
        >
          Find Literature Colleges
        </button>
      </section>
    </div>
  );
};

export default Literature;

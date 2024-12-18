import React from "react";
import PathConstants from "../../routes/PathConstants";
import { Link } from "react-router-dom";

const Accounting = () => {
  return (
    <div
      className="relative z-0 font-sans text-gray-900 bg-fixed bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210710/original/pngtree-e-commerce-company-technology-design-picture-image_1015563.jpg')",
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-10 py-5 text-white bg-black bg-opacity-70">
        <h1 className="text-3xl text-center">Explore Accounting Courses</h1>
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
                to={PathConstants.COMMERCE}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Commerce
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
          Why Choose a Career in Accounting?
        </h2>
        <p className="mt-4 text-gray-700">
          Accounting offers a structured path to understanding financial
          records, tax regulations, auditing, and corporate financial
          management. Discover the various undergraduate and postgraduate
          courses in Accounting and the entrance exams required for admission.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="p-10">
        <h2 className="mb-6 text-2xl text-center text-gray-800">
          Relevant Accounting Courses and Entrance Exams
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Bachelor of Commerce in Accounting (B.Com Accounting)
            </h3>
            <p className="mb-4 text-gray-700">
              An undergraduate program focusing on the core principles of
              accounting, financial management, and taxation.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>DUET:</strong> Delhi University Entrance Test -
                Tentative Date: May
              </p>
              <p>
                <strong>CUET:</strong> Common University Entrance Test -
                Tentative Date: June
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Master of Accounting (M.Acc)
            </h3>
            <p className="mb-4 text-gray-700">
              A postgraduate program specializing in advanced accounting
              concepts, financial reporting, and auditing.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>CAT:</strong> Common Admission Test - Tentative Date:
                November
              </p>
              <p>
                <strong>XAT:</strong> Xavier Aptitude Test - Tentative Date:
                January
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">
              Diploma in Accounting and Finance
            </h3>
            <p className="mb-4 text-gray-700">
              A practical diploma program offering expertise in accounting,
              financial analysis, and reporting.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>Direct Admission:</strong> Based on eligibility criteria
                of the institution
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-red-600">Ph.D. in Accounting</h3>
            <p className="mb-4 text-gray-700">
              A research-oriented doctoral program for in-depth exploration of
              accounting principles, financial reporting, and taxation.
            </p>
            <details className="text-gray-700">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>UGC NET:</strong> University Grants Commission National
                Eligibility Test - Tentative Date: December
              </p>
              <p>
                <strong>CSIR NET:</strong> Council of Scientific and Industrial
                Research Exam - Tentative Date: June
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="p-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-6 text-2xl text-red-600">
          Ready to Start Your Accounting Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-6 py-3 text-white transition bg-red-600 rounded-md hover:bg-red-700"
        >
          Find Accounting Colleges
        </button>
      </section>
    </div>
  );
};

export default Accounting;

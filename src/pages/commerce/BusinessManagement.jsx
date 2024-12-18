import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const BusinessManagement = () => {
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

      {/* Intro Section */}
      <section className="max-w-3xl py-10 mx-auto mt-10 text-center bg-white rounded-lg bg-opacity-80">
        <h2 className="text-3xl text-[#DE7C7D]">
          Why Choose a Career in Business Management?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Business Management equips you with the skills to manage
          organizations, lead teams, and make strategic business decisions.
          Explore undergraduate and postgraduate courses in Business Management
          and learn about the entrance exams required for admission.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="py-10">
        <h2 className="text-center text-[#2a2b28] text-3xl mb-8">
          Relevant Business Management Courses and Entrance Exams
        </h2>
        <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#DE7C7D] mb-4">
              Bachelor of Business Administration (BBA)
            </h3>
            <p className="mb-4 text-gray-700">
              An undergraduate program covering management fundamentals,
              finance, marketing, and organizational behavior.
            </p>
            <details className="text-left">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>IPMAT:</strong> Integrated Program in Management
                Aptitude Test - Tentative Date: June
              </p>
              <p>
                <strong>DU JAT:</strong> Delhi University Joint Admission Test -
                Tentative Date: May
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#DE7C7D] mb-4">
              Master of Business Administration (MBA)
            </h3>
            <p className="mb-4 text-gray-700">
              A postgraduate program specializing in advanced business
              management, strategic planning, and leadership.
            </p>
            <details className="text-left">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>CAT:</strong> Common Admission Test - Tentative Date:
                November
              </p>
              <p>
                <strong>MAT:</strong> Management Aptitude Test - Tentative Date:
                February, May, September, December
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#DE7C7D] mb-4">
              Diploma in Business Management
            </h3>
            <p className="mb-4 text-gray-700">
              A practical course providing foundational knowledge in management,
              operations, and entrepreneurship.
            </p>
            <details className="text-left">
              <summary className="cursor-pointer">View Entrance Exams</summary>
              <p>
                <strong>Direct Admission:</strong> Based on eligibility criteria
                of the institution
              </p>
            </details>
          </div>

          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#DE7C7D] mb-4">
              Ph.D. in Business Management
            </h3>
            <p className="mb-4 text-gray-700">
              A research-oriented doctoral program in organizational theory,
              strategy, and business innovation.
            </p>
            <details className="text-left">
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
      <section className="py-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="text-3xl text-[#DE7C7D] mb-6">
          Ready to Start Your Business Management Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="bg-[#DE7C7D] text-white px-6 py-3 text-xl rounded-lg hover:bg-[#D36666] transition duration-300"
        >
          Find Business Management Colleges
        </button>
      </section>
    </div>
  );
};

// Tailwind class for Link styles
const linkClass =
  "text-white px-4 py-2 rounded-md hover:bg-[#DE7C7D] transition duration-300";

export default BusinessManagement;

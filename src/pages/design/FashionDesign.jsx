import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const FashionDesign = () => {
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
                to={PathConstants.DESIGN}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Design
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
          Why Choose Fashion Design?
        </h2>
        <p className="mt-4 text-gray-600">
          Fashion Design courses blend creativity and technical skills to shape
          the world of fashion. Explore programs in apparel design, textile
          innovation, and fashion marketing, along with entrance exams for top
          institutes.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="px-5 py-10">
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">
          Relevant Fashion Design Courses and Entrance Exams
        </h2>
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Bachelor of Design in Fashion Design (B.Des)
            </h3>
            <p className="mt-3 text-gray-600">
              An undergraduate program focused on garment design, fabric
              studies, and trend analysis.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>NIFT:</strong> National Institute of Fashion Technology
                Entrance Exam - Tentative Date: January
              </p>
              <p>
                <strong>UCEED:</strong> Undergraduate Common Entrance
                Examination for Design - Tentative Date: February
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Master of Design in Fashion (M.Des)
            </h3>
            <p className="mt-3 text-gray-600">
              A postgraduate course that covers advanced fashion concepts,
              material innovation, and design thinking.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>CEED:</strong> Common Entrance Examination for Design -
                Tentative Date: March
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Diploma in Fashion Styling
            </h3>
            <p className="mt-3 text-gray-600">
              An introductory program covering styling, visual presentation, and
              fashion merchandising.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>IGNOU Entrance Test:</strong> Entrance for Fashion
                Styling - Tentative Date: July
              </p>
            </details>
          </div>

          <div className="p-5 text-center bg-white rounded-lg shadow-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-red-500">
              Ph.D. in Fashion and Textile Design
            </h3>
            <p className="mt-3 text-gray-600">
              An advanced research program exploring sustainable fashion,
              textile innovation, and global trends.
            </p>
            <details className="mt-3">
              <summary className="text-red-500 cursor-pointer">
                View Entrance Exams
              </summary>
              <p className="mt-2">
                <strong>UGC NET:</strong> National Eligibility Test for Fashion
                Studies - Tentative Date: December
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-5 py-10 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Ready to Start Your Fashion Design Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-400"
        >
          Find Fashion Design Colleges
        </button>
      </section>
    </div>
  );
};

export default FashionDesign;

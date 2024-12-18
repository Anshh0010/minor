import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const Medicine = () => {
  return (
    <div
      className="relative z-0 font-sans text-gray-900 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/10/27/22/15/technology-8346311_1280.png')",
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-10 p-5 text-white bg-black bg-opacity-70">
        <h1 className="text-4xl font-bold text-center">
          Explore Biotechnology Courses
        </h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
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
                to={PathConstants.SCIENCE}
                className="px-4 py-2 text-white transition border border-transparent rounded hover:bg-red-400 hover:border-white"
              >
                Science
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
      <section className="max-w-4xl p-8 mx-auto my-8 text-center bg-white rounded-lg bg-opacity-80">
        <h2 className="mb-4 text-3xl font-bold text-red-400">
          Why Choose a Career in Medicine?
        </h2>
        <p className="text-gray-700">
          Medicine offers diverse and rewarding career opportunities. Explore
          popular courses and learn about the entrance exams required to pursue
          a career in healthcare.
        </p>
      </section>

      {/* Medicine Courses Section */}
      <section className="p-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Popular Medicine Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
              description:
                "The most common medical degree, providing comprehensive training in medicine and surgery.",
              exams: [
                { name: "NEET (UG)", date: "Tentative Date: May" },
                { name: "AIIMS MBBS", date: "Tentative Date: June" },
              ],
            },
            {
              title: "Doctor of Medicine (MD)",
              description:
                "A postgraduate degree focusing on specialized fields like Pediatrics and Cardiology.",
              exams: [
                { name: "NEET PG", date: "Tentative Date: March" },
                { name: "AIIMS PG", date: "Tentative Date: April" },
              ],
            },
            {
              title: "Bachelor of Dental Surgery (BDS)",
              description:
                "A professional degree for aspiring dentists, focusing on oral health and dental care.",
              exams: [{ name: "NEET (UG)", date: "Tentative Date: May" }],
            },
            {
              title: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
              description:
                "An undergraduate program in Ayurvedic medicine, focusing on holistic healthcare.",
              exams: [{ name: "NEET (UG)", date: "Tentative Date: May" }],
            },
            {
              title: "Master of Surgery (MS)",
              description:
                "A postgraduate degree for advanced surgical training in various specialties.",
              exams: [{ name: "NEET SS", date: "Tentative Date: September" }],
            },
          ].map((course, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-md bg-opacity-90"
            >
              <h3 className="mb-3 text-xl font-bold text-red-400">
                {course.title}
              </h3>
              <p className="mb-4 text-gray-700">{course.description}</p>
              <details>
                <summary className="font-semibold text-gray-600 cursor-pointer">
                  View Entrance Exams
                </summary>
                {course.exams.map((exam, idx) => (
                  <p key={idx} className="text-gray-600">
                    <strong>{exam.name}:</strong> {exam.date}
                  </p>
                ))}
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-8 text-center text-white bg-black bg-opacity-80">
        <h2 className="mb-6 text-3xl font-bold text-red-400">
          Interested in a Medical Career?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-8 py-4 text-lg font-medium transition bg-red-400 rounded-lg hover:bg-red-500"
        >
          Find Medical Colleges
        </button>
      </section>
    </div>
  );
};

export default Medicine;

import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const BiotechnologyCourses = () => {
  return (
    <div
      className="relative z-0 font-sans text-gray-900 bg-fixed bg-center bg-cover "
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
          Why Choose Biotechnology?
        </h2>
        <p className="text-gray-700">
          Biotechnology combines biology and technology to create innovative
          solutions in healthcare, agriculture, and environmental science.
          Explore various undergraduate and postgraduate courses in
          Biotechnology and learn about the required entrance exams.
        </p>
      </section>

      {/* Biotechnology Courses Section */}
      <section className="p-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Relevant Biotechnology Courses and Entrance Exams
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bachelor of Technology (B.Tech) in Biotechnology",
              description:
                "An undergraduate program that blends biological sciences with engineering principles.",
              exams: [
                { name: "JEE Main", date: "Tentative Date: April & May" },
                { name: "NEET (UG)", date: "Tentative Date: May" },
                { name: "State CET", date: "Tentative Dates: April to June" },
              ],
            },
            {
              title: "Bachelor of Science (B.Sc.) in Biotechnology",
              description:
                "A comprehensive undergraduate course focused on molecular biology, genetics, and microbiology.",
              exams: [
                { name: "CUET", date: "Tentative Date: May" },
                { name: "ICAR AIEEA", date: "Tentative Date: June" },
              ],
            },
            {
              title: "Master of Science (M.Sc.) in Biotechnology",
              description:
                "A postgraduate program focusing on advanced topics like bioinformatics, genetic engineering, and microbiology.",
              exams: [
                { name: "GAT-B", date: "Tentative Date: April" },
                { name: "JNU CEEB", date: "Tentative Date: May" },
              ],
            },
            {
              title: "Master of Technology (M.Tech) in Biotechnology",
              description:
                "A postgraduate engineering course specializing in the application of biotechnology in industrial processes.",
              exams: [
                { name: "GATE", date: "Tentative Date: February" },
                {
                  name: "University Entrance Exams",
                  date: "Tentative Dates: March to May",
                },
              ],
            },
            {
              title: "Ph.D. in Biotechnology",
              description:
                "An advanced research program focused on innovative research in genetic engineering, bioinformatics, and molecular biology.",
              exams: [
                { name: "CSIR NET", date: "Tentative Date: June" },
                { name: "DBT JRF", date: "Tentative Date: April" },
              ],
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
          Ready to Start Your Biotechnology Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-8 py-4 text-lg font-medium transition bg-red-400 rounded-lg hover:bg-red-500"
        >
          Find Biotechnology Colleges
        </button>
      </section>
    </div>
  );
};

export default BiotechnologyCourses;

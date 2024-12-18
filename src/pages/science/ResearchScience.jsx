import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const ResearchScientist = () => {
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
          Why Become a Research Scientist?
        </h2>
        <p className="text-gray-700">
          Research Scientists conduct experiments and studies to advance
          knowledge in various fields. Discover undergraduate and postgraduate
          courses along with the entrance exams required to embark on a research
          scientist career.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="p-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Relevant Research Scientist Courses and Entrance Exams
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bachelor of Science in Research (B.Sc.)",
              description:
                "An undergraduate program focusing on foundational research methods and principles in various scientific fields.",
              exams: [
                { name: "CUET", date: "Tentative Date: May" },
                { name: "IISER Aptitude Test", date: "Tentative Date: June" },
              ],
            },
            {
              title: "Master of Science in Research (M.Sc.)",
              description:
                "A postgraduate course focusing on advanced research methodologies, data analysis, and specialized research topics.",
              exams: [
                { name: "JNU CEEB", date: "Tentative Date: May" },
                { name: "GATE", date: "Tentative Date: February" },
              ],
            },
            {
              title: "Diploma in Research Methodology",
              description:
                "A practical course providing foundational skills in research methods and analysis techniques.",
              exams: [
                {
                  name: "Polytechnic Entrance Exams",
                  date: "Tentative Dates: April to June",
                },
              ],
            },
            {
              title: "Ph.D. in Research Science",
              description:
                "An advanced research program to develop innovative solutions and conduct pioneering research in your chosen field.",
              exams: [
                { name: "CSIR NET", date: "Tentative Date: June" },
                { name: "UGC NET", date: "Tentative Date: December" },
              ],
            },
            {
              title: "Integrated M.Sc.-Ph.D. in Research Science",
              description:
                "A 5-year integrated program combining postgraduate and doctoral studies in research science.",
              exams: [
                { name: "CUET", date: "Tentative Date: May" },
                { name: "GATE", date: "Tentative Date: February" },
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
          Ready to Start Your Research Scientist Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-8 py-4 text-lg font-medium transition bg-red-400 rounded-lg hover:bg-red-500"
        >
          Find Research Science Colleges
        </button>
      </section>
    </div>
  );
};

export default ResearchScientist;

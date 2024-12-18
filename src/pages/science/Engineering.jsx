import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const EngineeringCourses = () => {
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
          Why Choose Engineering?
        </h2>
        <p className="text-gray-700">
          Engineering is a diverse field with a wide range of specializations.
          Explore various undergraduate and postgraduate courses in Engineering
          and learn about the competitive exams required for admission.
        </p>
      </section>

      {/* Engineering Courses Section */}
      <section className="p-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Relevant Engineering Courses and Entrance Exams
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bachelor of Technology (B.Tech)",
              description:
                "A popular undergraduate program in fields like Mechanical, Electrical, and Computer Science Engineering.",
              exams: [
                { name: "JEE Main", date: "Tentative Date: April & May" },
                {
                  name: "JEE Advanced",
                  date: "For IIT admissions - Tentative Date: June",
                },
                {
                  name: "State CET",
                  date: "State-level Common Entrance Test - Tentative Dates: April to June",
                },
              ],
            },
            {
              title: "Bachelor of Engineering (B.E.)",
              description:
                "Undergraduate degree focusing on practical and theoretical aspects of engineering.",
              exams: [
                {
                  name: "COMEDK UGET",
                  date: "Karnataka entrance exam - Tentative Date: May",
                },
                {
                  name: "MH CET",
                  date: "Maharashtra entrance test for engineering - Tentative Date: May",
                },
              ],
            },
            {
              title: "Master of Technology (M.Tech)",
              description:
                "A postgraduate program specializing in advanced areas of engineering and technology.",
              exams: [
                {
                  name: "GATE",
                  date: "Graduate Aptitude Test in Engineering - Tentative Date: February",
                },
                {
                  name: "University Entrance Exams",
                  date: "Specific to universities - Tentative Dates: March to May",
                },
              ],
            },
            {
              title: "Diploma in Engineering",
              description:
                "A practical course for students aiming to start a career in engineering early.",
              exams: [
                {
                  name: "Polytechnic Entrance Exams",
                  date: "State-level exams - Tentative Dates: April to June",
                },
              ],
            },
            {
              title: "Integrated M.Tech",
              description:
                "A 5-year integrated program combining B.Tech and M.Tech for in-depth engineering knowledge.",
              exams: [
                {
                  name: "JEE Main & Advanced",
                  date: "For IIT admissions - Tentative Dates: April to June",
                },
                {
                  name: "BITSAT",
                  date: "Birla Institute of Technology and Science Admission Test - Tentative Date: May",
                },
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
          Ready to Start Your Engineering Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-8 py-4 text-lg font-medium transition bg-red-400 rounded-lg hover:bg-red-500"
        >
          Find Engineering Colleges
        </button>
      </section>
    </div>
  );
};

export default EngineeringCourses;

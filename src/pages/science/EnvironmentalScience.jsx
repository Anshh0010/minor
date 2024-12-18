import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const EnvironmentalScienceCourses = () => {
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
          Why Choose Environmental Science?
        </h2>
        <p className="text-gray-700">
          Environmental Science focuses on understanding the natural world and
          finding sustainable solutions to environmental issues. Explore various
          undergraduate and postgraduate courses in Environmental Science and
          learn about the entrance exams required for admission.
        </p>
      </section>

      {/* Environmental Science Courses Section */}
      <section className="p-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Relevant Environmental Science Courses and Entrance Exams
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bachelor of Environmental Science (B.Sc.)",
              description:
                "An undergraduate program focusing on environmental conservation, sustainability, and climate studies.",
              exams: [
                { name: "CUET", date: "Tentative Date: May" },
                {
                  name: "ICAR AIEEA",
                  date: "Indian Council of Agricultural Research Exam - Tentative Date: June",
                },
              ],
            },
            {
              title: "Master of Environmental Science (M.Sc.)",
              description:
                "A postgraduate course specializing in advanced topics like climate change, pollution control, and sustainable development.",
              exams: [
                {
                  name: "JNU CEEB",
                  date: "Jawaharlal Nehru University Combined Entrance Exam - Tentative Date: May",
                },
                {
                  name: "GAT-B",
                  date: "Graduate Aptitude Test in Biotechnology for Environmental Sciences - Tentative Date: April",
                },
              ],
            },
            {
              title: "Diploma in Environmental Science",
              description:
                "A practical course providing foundational knowledge in environmental studies and conservation.",
              exams: [
                {
                  name: "Polytechnic Entrance Exams",
                  date: "State-level exams - Tentative Dates: April to June",
                },
              ],
            },
            {
              title: "Ph.D. in Environmental Science",
              description:
                "An advanced research program focusing on innovative solutions for environmental challenges.",
              exams: [
                {
                  name: "CSIR NET",
                  date: "Council of Scientific and Industrial Research Exam - Tentative Date: June",
                },
                {
                  name: "UGC NET",
                  date: "University Grants Commission National Eligibility Test - Tentative Date: December",
                },
              ],
            },
            {
              title: "Integrated M.Sc. in Environmental Science",
              description:
                "A 5-year integrated program combining undergraduate and postgraduate studies in Environmental Science.",
              exams: [
                {
                  name: "CUET",
                  date: "Common University Entrance Test - Tentative Date: May",
                },
                {
                  name: "BHU PET",
                  date: "Banaras Hindu University Postgraduate Entrance Test - Tentative Date: June",
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
          Ready to Start Your Environmental Science Journey?
        </h2>
        <button
          onClick={() => (window.location.href = "college-finder.html")}
          className="px-8 py-4 text-lg font-medium transition bg-red-400 rounded-lg hover:bg-red-500"
        >
          Find Environmental Science Colleges
        </button>
      </section>
    </div>
  );
};

export default EnvironmentalScienceCourses;

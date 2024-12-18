import React, { useState } from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import StateCity from "../components/StateCity";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { and, collection, getDocs, or, query, where } from "firebase/firestore";

const SearchPage = () => {
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [formData, setFormData] = useState({
    type: {
      technology: false,
      commerce: false,
      arts: false,
      design: false,
      medical: false,
    },
    name: "",
    state: "",
    city: "",
  });

  const {
    name,
    type: { technology, commerce, arts, design, medical },
  } = formData;

  const onNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value.toLowerCase().trim() });
  };

  const onClick = (e) => {
    setFormData({
      ...formData,
      type: {
        ...formData.type,
        [e.target.id]: e.target.checked,
      },
    });
  };

  const onStateChange = (state) => {
    setFormData({
      ...formData,
      state: state.toLowerCase().trim(),
    });
  };
  const onCityChange = (city) => {
    setFormData({
      ...formData,
      city: city.toLowerCase().trim(),
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const listRef = collection(db, "colleges-list");

      const conditions = [];

      const queryBuilder = () => {
        if (formData.name) {
          conditions.push(where("name", ">=", formData.name));
          conditions.push(where("name", "<", formData.name + "\uf8ff"));
        }

        if (formData.state) {
          conditions.push(where("state", "==", formData.state));
        }

        if (formData.city) {
          conditions.push(where("city", "==", formData.city));
        }

        const typeConditions = Object.entries(formData.type)
          .filter(([key, value]) => value)
          .map(([key]) => where("type", "==", key));

        if (typeConditions.length > 0) {
          conditions.push(or(...typeConditions));
        }
        console.log(conditions);
        return query(listRef, and(...conditions));
      };
      const q = queryBuilder();

      const results = await getDocs(q);

      const colleges = [];

      results.forEach((doc) => {
        // const data = doc.data();
        // console.log(renameKeys(doc.data()));
        console.log(doc.data());
        colleges.push(doc.data());
      });

      console.log(colleges);
      setFilteredColleges(colleges);
    } catch (error) {
      console.log(error);
    }
  };

  // Sample data for colleges

  return (
    <div className="min-h-screen bg-fixed bg-gray-100 bg-center bg-cover">
      {/* Header */}
      <header className="sticky top-0 py-4 text-white bg-black z-5 bg-opacity-70">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Find Colleges</h1>
          <nav className="mt-4">
            <ul className="flex justify-center gap-4 py-4 list-none">
              <li>
                <Link
                  to={PathConstants.HOME}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.SCIENCE}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.COMMERCE}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Commerce
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.TECHNOLOGY}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.ARTS}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Arts
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.DESIGN}
                  className="px-4 py-2 text-white no-underline rounded hover:bg-red-500 hover:border-white"
                >
                  Design
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <form
        className="max-w-4xl p-8 mx-auto mt-8 text-center bg-white rounded-lg shadow-lg bg-opacity-90"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Search for Colleges
        </h2>
        <input
          type="text"
          placeholder="Enter college name..."
          value={name}
          onChange={onNameChange}
          className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-5 place-content-start">
          <div className="">
            <input
              type="checkbox"
              name="technology"
              id="technology"
              value="technology"
              onClick={onClick}
            />
            <label htmlFor="technology" className="select-none">
              {" "}
              Technology
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="commerce"
              id="commerce"
              value="commerce"
              onClick={onClick}
            />
            <label htmlFor="commerce" className="select-none">
              {" "}
              Commerce
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="arts"
              id="arts"
              value="arts"
              onClick={onClick}
            />
            <label htmlFor="arts" className="select-none">
              {" "}
              Arts
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="design"
              id="design"
              value="design"
              onClick={onClick}
            />
            <label htmlFor="design" className="select-none">
              {" "}
              Design
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="medical"
              id="medical"
              value="medical"
              onClick={onClick}
            />
            <label htmlFor="medical" className="select-none">
              {" "}
              Medical
            </label>
          </div>
        </div>

        <StateCity onStateChange={onStateChange} onCityChange={onCityChange} />

        <button className="py-2 text-white bg-red-600 rounded-lg mt-14 px-7 lack border-1 hover:scale-110">
          Search
        </button>
      </form>

      {/* Results Section */}

      <section className="max-w-full mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Search Results
        </h2>
        {filteredColleges.length > 0 ? (
          <div className="mt-4 overflow-x-auto">
            <table className="w-5/6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="text-white bg-red-600">
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">State</th>
                  <th className="px-6 py-3 text-left">City</th>
                  <th className="px-6 py-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.map((college, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-3 truncate">{college["name"]}</td>
                    <td className="px-6 py-3 truncate">{college.state}</td>
                    <td className="px-6 py-3">{college.city}</td>
                    <td className="px-6 py-3">{college.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-center text-gray-600">
            No results found for "<span className="font-semibold">{}</span>".
          </p>
        )}
      </section>
    </div>
  );
};

export default SearchPage;

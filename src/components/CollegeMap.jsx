import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const CollegeMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyColleges, setNearbyColleges] = useState([]);
  const [selectedStream, setSelectedStream] = useState("all");
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Mock college data with coordinates
  const mockColleges = [
    {
      id: 1,
      name: "Delhi University",
      type: "Arts",
      location: { lat: 28.6139, lng: 77.2090 },
      address: "Delhi, India",
      cutoff: "85%",
      facilities: ["Hostel", "Library", "Labs", "Sports"],
      courses: ["BA", "MA", "B.Sc", "M.Sc"],
      distance: "2.5 km"
    },
    {
      id: 2,
      name: "IIT Delhi",
      type: "Technology",
      location: { lat: 28.5458, lng: 77.1927 },
      address: "Hauz Khas, Delhi",
      cutoff: "JEE Advanced Rank < 1000",
      facilities: ["Hostel", "Research Labs", "Library", "Sports Complex"],
      courses: ["B.Tech", "M.Tech", "PhD"],
      distance: "5.2 km"
    },
    {
      id: 3,
      name: "Lady Shri Ram College",
      type: "Commerce",
      location: { lat: 28.6289, lng: 77.2065 },
      address: "Lajpat Nagar, Delhi",
      cutoff: "98%",
      facilities: ["Library", "Computer Lab", "Auditorium"],
      courses: ["B.Com", "BA Economics", "BBA"],
      distance: "3.1 km"
    },
    {
      id: 4,
      name: "AIIMS Delhi",
      type: "Science",
      location: { lat: 28.5672, lng: 77.2100 },
      address: "Ansari Nagar, Delhi",
      cutoff: "NEET Rank < 100",
      facilities: ["Hospital", "Research Center", "Hostel", "Library"],
      courses: ["MBBS", "MD", "MS", "PhD"],
      distance: "4.8 km"
    },
    {
      id: 5,
      name: "National Institute of Design",
      type: "Design",
      location: { lat: 28.6304, lng: 77.2177 },
      address: "Lodhi Road, Delhi",
      cutoff: "NID DAT Qualified",
      facilities: ["Design Studios", "Workshop", "Library", "Gallery"],
      courses: ["B.Des", "M.Des", "PhD"],
      distance: "6.3 km"
    }
  ];

  const getCurrentLocation = () => {
    setLoading(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        findNearbyColleges(location);
        setLoading(false);
      },
      (error) => {
        setLocationError("Unable to retrieve your location. Showing default colleges.");
        // Use Delhi as default location
        const defaultLocation = { lat: 28.6139, lng: 77.2090 };
        setUserLocation(defaultLocation);
        findNearbyColleges(defaultLocation);
        setLoading(false);
      }
    );
  };

  const findNearbyColleges = (location) => {
    // In a real app, this would call Google Places API
    // For now, we'll use mock data with calculated distances
    const collegesWithDistance = mockColleges.map(college => ({
      ...college,
      distance: calculateDistance(location, college.location)
    }));

    // Sort by distance
    collegesWithDistance.sort((a, b) => a.distance - b.distance);
    setNearbyColleges(collegesWithDistance);
  };

  const calculateDistance = (pos1, pos2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
    const dLon = (pos2.lng - pos1.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const filteredColleges = selectedStream === "all" 
    ? nearbyColleges 
    : nearbyColleges.filter(college => 
        college.type.toLowerCase() === selectedStream.toLowerCase()
      );

  const streamColors = {
    science: "#ef4444",
    commerce: "#3b82f6",
    technology: "#10b981",
    arts: "#f59e0b",
    design: "#8b5cf6"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Nearby Government Colleges</h1>
          <p className="text-gray-600 text-lg">Find the best colleges near your location</p>
        </motion.div>

        {/* Location & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={getCurrentLocation}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Getting Location...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Find Nearby Colleges
                  </div>
                )}
              </motion.button>
              
              {locationError && (
                <p className="text-red-500 text-sm">{locationError}</p>
              )}
            </div>

            {/* Stream Filter */}
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Filter by Stream:</label>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Streams</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="technology">Technology</option>
                <option value="arts">Arts</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Colleges Grid */}
        {filteredColleges.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* College Header */}
                <div 
                  className="p-4 text-white"
                  style={{ backgroundColor: streamColors[college.type.toLowerCase()] || "#6b7280" }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{college.name}</h3>
                      <p className="text-sm opacity-90">{college.address}</p>
                    </div>
                    <span className="px-2 py-1 bg-white bg-opacity-20 rounded-lg text-xs font-medium">
                      {college.type}
                    </span>
                  </div>
                </div>

                {/* College Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Distance:</span>
                      <span className="text-sm font-bold text-green-600">
                        {college.distance.toFixed(1)} km
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Cutoff:</span>
                      <span className="text-sm font-bold text-blue-600">{college.cutoff}</span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Available Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.map((course, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Facilities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.facilities.map((facility, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                      style={{ backgroundColor: streamColors[college.type.toLowerCase()] || "#6b7280" }}
                    >
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {!loading && filteredColleges.length === 0 && userLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No colleges found</h3>
            <p className="text-gray-600">Try adjusting your filter or search in a different area.</p>
          </motion.div>
        )}

        {/* Instructions */}
        {!userLocation && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Find Colleges Near You</h3>
            <p className="text-gray-600 mb-4">Click the button above to discover government colleges in your area</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CollegeMap;
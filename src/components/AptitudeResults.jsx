import React from "react";
import { motion } from "motion/react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { streamInfo } from "../data/aptitudeQuestions";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AptitudeResults = ({ results, onRestart }) => {
  const { scores } = results;
  
  // Sort streams by score
  const sortedStreams = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3); // Top 3 recommendations

  const topStream = sortedStreams[0];
  const topStreamInfo = streamInfo[topStream[0]];

  // Chart data for doughnut chart
  const doughnutData = {
    labels: Object.keys(scores).map(stream => streamInfo[stream].name),
    datasets: [{
      data: Object.values(scores),
      backgroundColor: Object.keys(scores).map(stream => streamInfo[stream].color),
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  };

  // Chart data for bar chart
  const barData = {
    labels: Object.keys(scores).map(stream => streamInfo[stream].name),
    datasets: [{
      label: 'Compatibility Score (%)',
      data: Object.values(scores),
      backgroundColor: Object.keys(scores).map(stream => streamInfo[stream].color + '80'),
      borderColor: Object.keys(scores).map(stream => streamInfo[stream].color),
      borderWidth: 2,
      borderRadius: 8
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14
          }
        }
      }
    }
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  const getStreamPath = (streamKey) => {
    const pathMap = {
      science: PathConstants.SCIENCE,
      commerce: PathConstants.COMMERCE,
      technology: PathConstants.TECHNOLOGY,
      arts: PathConstants.ARTS,
      design: PathConstants.DESIGN
    };
    return pathMap[streamKey];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Career Assessment Results</h1>
          <p className="text-gray-600 text-lg">Based on your responses, here are your personalized recommendations</p>
        </motion.div>

        {/* Top Recommendation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: topStreamInfo.color + '20' }}>
              <span className="text-3xl font-bold" style={{ color: topStreamInfo.color }}>
                {topStream[1]}%
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              🎯 Top Recommendation: {topStreamInfo.name}
            </h2>
            <p className="text-gray-600 mb-4">{topStreamInfo.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {topStreamInfo.careers.map((career, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {career}
                </span>
              ))}
            </div>
            <Link
              to={getStreamPath(topStream[0])}
              className="inline-block px-6 py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: topStreamInfo.color }}
            >
              Explore {topStreamInfo.name} Careers
            </Link>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Doughnut Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Score Distribution</h3>
            <div className="h-80">
              <Doughnut data={doughnutData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Detailed Scores</h3>
            <div className="h-80">
              <Bar data={barData} options={barOptions} />
            </div>
          </motion.div>
        </div>

        {/* Detailed Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Top 3 Stream Matches</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedStreams.map(([streamKey, score], index) => {
              const stream = streamInfo[streamKey];
              return (
                <motion.div
                  key={streamKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: stream.color + '40' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: stream.color + '20' }}>
                    <span className="text-xl font-bold" style={{ color: stream.color }}>
                      #{index + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{stream.name}</h4>
                  <div className="text-3xl font-bold mb-2" style={{ color: stream.color }}>
                    {score}%
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{stream.description}</p>
                  <Link
                    to={getStreamPath(streamKey)}
                    className="inline-block px-4 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: stream.color }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            Retake Test
          </motion.button>
          <Link
            to={PathConstants.SEARCH}
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Find Colleges
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AptitudeResults;
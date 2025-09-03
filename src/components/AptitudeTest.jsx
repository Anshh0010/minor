import React, { useState } from "react";
import { aptitudeQuestions, streamInfo } from "../data/aptitudeQuestions";
import AptitudeResults from "./AptitudeResults";
import { motion, AnimatePresence } from "motion/react";

const AptitudeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < aptitudeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const streamScores = {
      science: 0,
      commerce: 0,
      technology: 0,
      arts: 0,
      design: 0
    };

    Object.values(answers).forEach(answer => {
      Object.entries(answer.streams).forEach(([stream, score]) => {
        streamScores[stream] += score;
      });
    });

    // Convert to percentages
    const maxPossibleScore = aptitudeQuestions.length * 3;
    const percentageScores = {};
    Object.entries(streamScores).forEach(([stream, score]) => {
      percentageScores[stream] = Math.round((score / maxPossibleScore) * 100);
    });

    setShowResults({ scores: percentageScores, rawScores: streamScores });
  };

  const startTest = () => {
    setTestStarted(true);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setTestStarted(false);
  };

  if (showResults) {
    return <AptitudeResults results={showResults} onRestart={restartTest} />;
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Career Aptitude Test</h1>
            <p className="text-gray-600 text-lg">Discover your ideal career stream through our comprehensive assessment</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What you'll get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Personalized stream recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Detailed percentage scores</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Career path suggestions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">College recommendations</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-6">
            <p>⏱️ Takes about 5-7 minutes</p>
            <p>📝 {aptitudeQuestions.length} carefully crafted questions</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startTest}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Aptitude Test
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const question = aptitudeQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / aptitudeQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {aptitudeQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                {question.type.charAt(0).toUpperCase() + question.type.slice(1)} Question
              </span>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(question.id, option)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                    answers[question.id]?.text === option.text
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[question.id]?.text === option.text
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}>
                      {answers[question.id]?.text === option.text && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="font-medium">{option.text}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentQuestion === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextQuestion}
                disabled={!answers[question.id]}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !answers[question.id]
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                }`}
              >
                {currentQuestion === aptitudeQuestions.length - 1 ? "Get Results" : "Next"}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AptitudeTest;
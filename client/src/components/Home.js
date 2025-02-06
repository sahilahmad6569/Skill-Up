import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "The ultimate platform for aspiring programmers to sharpen their coding skills! Explore topics, solve challenges, and learn with real-time feedback.";

  useEffect(() => {
    let currentIndex = 0;
  
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length - 1) {
        setTypedText(fullText.slice(0, currentIndex + 1)); // Appending correctly
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing when done
      }
    }, 20);
  
    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header Section */}
      <header className="w-full bg-gray-800 py-2 shadow-lg">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <img
            src="/assets/IU-CodeLab-Logo.png"
            alt="Skill Up Logo"
            className="h-10 md:h-14 transform transition duration-300 hover:scale-105"
          />
          <nav className="hidden md:flex space-x-6">
            <Link to="/login" className="text-gray-300 hover:text-blue-500 transition duration-300">
              Login
            </Link>
            <Link to="/register" className="text-gray-300 hover:text-green-500 transition duration-300">
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gray-900 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
          Welcome to Skill Up
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
          {typedText}
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-2xl transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-2xl transition duration-300"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-800 py-16">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-10">
          Why Choose Skill Up?
        </h2>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 text-center p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Integrated IDE</h3>
            <p className="text-gray-300">
              Code directly within the platform. No setup needed, just start coding instantly!
            </p>
          </div>
          <div className="bg-gray-700 text-center p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Structured Learning</h3>
            <p className="text-gray-300">
              Exercises organized by topics and difficulty levels ensure steady progress.
            </p>
          </div>
          <div className="bg-gray-700 text-center p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Real-Time Feedback</h3>
            <p className="text-gray-300">
              Get instant feedback to refine your coding skills and learn from mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-900 py-16">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-10">
          What Our Users Say
        </h2>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 text-center p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <p className="text-gray-300 mb-4">
              "Skill Up helped me practice coding daily and improve my problem-solving skills."
            </p>
            <h4 className="text-blue-500 font-semibold">John Doe</h4>
            <p className="text-gray-500">CS Student</p>
          </div>
          <div className="bg-gray-800 text-center p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <p className="text-gray-300 mb-4">
              "A great platform with an easy-to-use IDE and a wide variety of coding challenges."
            </p>
            <h4 className="text-blue-500 font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16 w-full text-center">
        <h2 className="text-3xl text-white font-semibold mb-6">
          Ready to Start Your Coding Journey?
        </h2>
        <Link
          to="/register"
          className="bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-800 transition duration-300"
        >
          Join Skill Up Now
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6 w-full text-center text-gray-500 relative">
        <p>© {new Date().getFullYear()} Skill Up. All rights reserved.</p>
        {/* Admin Login Button inside footer */}
        <Link
          to="/admin/login"
          className="absolute bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 hover:shadow-2xl transition duration-300"
        >
          Admin Login
        </Link>
      </footer>
    </div>
  );
};

export default Home;
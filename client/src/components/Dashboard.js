import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [languages, setLanguages] = useState([]); // State for programming languages
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return;
        }

        const res = await axios.get('https://iu-codelab.onrender.com/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        alert('Error fetching user data');
      }
    };

    // Fetch programming languages data
    const fetchLanguages = async () => {
      try {
        const res = await axios.get('https://iu-codelab.onrender.com/api/courses'); // Replace with your API endpoint
        setLanguages(res.data);
      } catch (error) {
        console.error('Error fetching programming languages:', error);
      }
    };

    fetchUser();
    fetchLanguages();
  }, []);

  if (!user) {
    return <h2 className="text-center mt-8">Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="/assets/IU-CodeLab-Logo.png"
            alt="IU CodeLab Logo"
            className="h-10 md:h-14 transform transition duration-300 hover:scale-105"
          />
          <h2 className="text-xl font-bold">Welcome, {user.name}!</h2>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 leading-relaxed">
            Choose a Programming Language
          </h1>
          <p className="text-gray-400 mt-4">
            Select a programming language to begin your learning journey.
          </p>
        </div>

        {/* Programming Languages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.length > 0 ? (
            languages.map((lang) => (
              <div
                key={lang._id}
                className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer relative group"
                onClick={() => navigate(`/course/${lang._id}`)} // Navigate with courseId
              >
                <h3 className="text-2xl font-bold text-white mb-2">{lang.name}</h3>
                <p className="text-gray-400">{lang.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-20 rounded-lg transition duration-300"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No programming languages found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

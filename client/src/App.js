import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import CoursePage from './components/CoursePage'; // Import the CoursePage component
import { jwtDecode } from 'jwt-decode'; // Corrected import

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false); // No token means not authenticated
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('token');
          setIsAuthenticated(false); // Token expired, set authentication to false
        } else {
          setIsAuthenticated(true); // Token is valid
        }
      } catch (error) {
        setIsAuthenticated(false); // If decoding fails, treat as unauthenticated
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/course/:courseId" element={isAuthenticated ? <CoursePage /> : <Navigate to="/login" />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

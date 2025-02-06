import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Added confirmPassword state
  });
  const [loading, setLoading] = useState(false); // To manage the loading state
  const [passwordVisible, setPasswordVisible] = useState(false); // To toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // To toggle confirm password visibility
  const { name, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        setLoading(false);
        return;
      }
      const res = await axios.post('https://iu-codelab.onrender.com/api/auth/register', formData);
      alert(res.data.message || 'Registration successful! Please log in.');
      navigate('/login'); // Redirect to login page after registration
      setLoading(false); // Stop loading
    } catch (error) {
      alert(error.response?.data?.message || 'Error registering user');
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                placeholder="Confirm Password"
                className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full p-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

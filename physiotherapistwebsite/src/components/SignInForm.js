import React, { useState } from 'react';
import loginImage from '../images/login-col-left-img.png';
import logo from '../images/logo1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signinform.css';

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password validation regex (at least 6 chars, 1 uppercase, 1 lowercase, 1 digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  // Live validation
  let newErrors = { ...errors };
  if (name === 'email') {
    newErrors.email = emailRegex.test(value) ? '' : 'Enter a valid email';
    }
    if (name === 'password') {
      newErrors.password = passwordRegex.test(value)
        ? ''
        : 'Password must be at least 6 characters with 1 uppercase, 1 lowercase, and 1 digit';
    }
    setErrors(newErrors);
  };

  // Validate entire form before submission
  const validateForm = () => {
    let newErrors = {};
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must be at least 6 characters with 1 uppercase, 1 lowercase, and 1 digit';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (!validateForm()) return; // Stop submission if validation fails

  try {
    const response = await axios.post(
'http://localhost:5000/api/auth/login',
      {
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true, // Include cookies & credentials
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    }
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message || 'Invalid email or password');
    } else {
      setError('Failed to connect to the server. Please try again.');
    }
  }
};


  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                {/* Right Column with Form */}
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={logo} style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Log In</h4>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      {/* Email Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Email</label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      {/* Password Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Password</label>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-white"
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      {/* Create Account */}
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger bg-danger">
                          <Link to="/sign-up" className="create-link text-white">Create new</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Left Column with Image */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <img
                    src={loginImage}
                    alt="Login Illustration"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

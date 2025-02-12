import React, { useState } from 'react';
import signUpImage from '../images/login-col-left-img.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signupform.css';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Regex for validation
  const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Validate individual fields
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!nameRegex.test(value)) {
          error = 'Name must contain only letters and spaces.';
        }
        break;

      case 'email':
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address.';
        }
        break;

      case 'password':
        if (!passwordRegex.test(value)) {
          error = 'Password must be at least 8 characters, with an uppercase, lowercase, number, and special character.';
        }
        break;

      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match.';
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { 
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        alert('Account created successfully!');
        navigate('/sign-in'); // Redirect to login page
      }
    } catch (err) {
      setErrors({ api: err.response?.data?.message || 'An error occurred during signup.' });
    }
  };

  return (
    <section className="vh-100 signup-section">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10 col-xl-9">
            <div className="card text-black signup-card">
              <div className="card-body">
                <div className="row justify-content-center">
                  
                  {/* Form Column */}
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 form-column">
                    <h1 className="text-center fw-bold mb-4">Sign Up</h1>
                    {errors.api && <div className="alert alert-danger">{errors.api}</div>}

                    <form onSubmit={handleSubmit}>
                      <div className="input-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>

                      <div className="input-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>

                      <div className="input-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>

                      <div className="input-group">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Repeat your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms" required />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="btn-container">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                        <Link to="/sign-in" className="btn btn-danger btn-lg">
                          Sign In
                        </Link>
                      </div>
                    </form>
                  </div>

                  {/* Image Column */}
                  <div className="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-2 image-column">
                    <img src={signUpImage} className="img-fluid" alt="Sign Up Illustration" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

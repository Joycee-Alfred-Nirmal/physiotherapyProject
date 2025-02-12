import React, { useState, useEffect, useRef } from 'react';
import './appointment.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import seniorBpCheckImage from '../images/senior_bp_check.webp';

export default function Appointment() {
  const navigate = useNavigate();
  const dateTimeInputRef = useRef(null); // Reference for date-time picker

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    date: '',
    service: '',
    doctors: '',
    category: '' 
  });

  const [currentDateTime, setCurrentDateTime] = useState('');
  const [error, setError] = useState(''); // Error state for validation or API errors

  // Set current date and time as default value for the picker
  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const date = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${date}T${hours}:${minutes}`;
    };
    setCurrentDateTime(getCurrentDateTime());
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle datetime-local input change
  const handleDateTimeChange = (e) => {
    setCurrentDateTime(e.target.value);
    setFormData({ ...formData, date: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    const { firstName, lastName, phoneNumber, date, service, doctors,category } = formData;

    if (!firstName || !lastName) return 'First and Last name are required.';
    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      return 'Name should only contain alphabets.';
    }
    if (!phoneNumber || !/^[0-9]{10}$/.test(phoneNumber)) {
      return 'Phone number must be 10 digits.';
    }
    if (!date) return 'Please select a date and time.';
    if (!service) return 'Please select a service.';
    if (!doctors) return 'Please select a doctor.';
    if (!category) return 'Please select a category.';
    return ''; // No errors
  };

  // Form submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Validate form data
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Show validation error if any
      return;
    }
  
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not logged in. Please log in to continue.');
      return;
    }
  
    try {
      // Make the API request to book an appointment
      const response = await axios.post(
        'http://localhost:5000/api/auth/bookAppointment',
        { ...formData }, // Send form data
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
        }
      );
  
      // Handle success response
      if (response.status === 200 || response.status === 201) {
        alert('Your appointment is successfully booked!');
        navigate('/dashboard'); // Redirect to dashboard or another page
      } else {
        setError('Failed to book appointment. Please try again.');
      }
    } catch (err) {
      console.error('API Error:', err);
      
      // Check for specific error codes or messages to handle different error cases
      if (err.response) {
        if (err.response.status === 401) {
          setError('Unauthorized: Please log in again.');
        } else if (err.response.status === 400) {
          setError('Bad Request: Please check your form data.');
        } else {
          setError('Failed to book appointment. Please try again later.');
        }
      } else {
        setError('Network Error: Please check your internet connection.');
      }
    }
  };
  

  return (
    <div className='appointmentouter'>
      <div className='appointmentinner'>
        <div className='appointmentImgConta'>
          <img className='imageBp' src={seniorBpCheckImage} alt="Senior BP Check" />
        </div>
        <div className='appointmentcontainer'>
          <div className='acontainer1'>
            <h1>Recover In the Comfort of <br />Your Home</h1>
          </div>
          <div className='acontainer2'>
            <div className='acontainerinner'>
              <div className='appointmentHead'>
                <h5>Book an Appointment</h5>
              </div>
              <form className='appointmentForm' onSubmit={handleFormSubmit}>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter First Name'
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter Last Name'
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Enter Phone Number'
                  onChange={handleInputChange}
                />
                <div
                  className='datePickerWrapper '
                  onClick={() => dateTimeInputRef.current?.showPicker()} // Open date-time picker
                >
                  <input
                    type='datetime-local'
                    value={currentDateTime}
                    className="dateTime w-100"
                    ref={dateTimeInputRef} // Attach ref to input
                    onChange={handleDateTimeChange}
                  />
                </div>
                <select
                  name='service'
                  onChange={handleInputChange}
                  defaultValue=""
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Nursing at Home">Nursing at Home</option>
                  <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                  <option value="Transition Care / Rehabilitation">Transition Care / Rehabilitation</option>
                </select>
                <select
                  name='doctors'
                  onChange={handleInputChange}
                >
                  <option value="">Doctors</option>
                  <option value="Dr.Suresh">Dr.Suresh</option>
                  <option value="Dr.Ashok">Dr.Ashok</option>
                  <option value="Dr.Harsha">Dr.Harsha</option>
                </select>
                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="Lower Back Pain">Lower Back Pain</option>
                                    <option value="Neck and Upper Back Pain">Neck and Upper Back Pain</option>
                                    <option value="Knee Pain">Knee Pain</option>
                                    <option value="Shoulder Pain">Shoulder Pain</option>
                                    <option value="Wrist Pain">Wrist Pain</option>
                                    <option value="Other Chronic Pain">Other Chronic Pain</option>
                                </select>

                {error && <p className="error">{error}</p>}

                <div className='appointmentsubmitmain'>
                  <button type='submit' className='appointmentsubmit'>
                    Submit
                  </button>
                </div>
              </form>
              <p className='terms'>By submitting the form, you agree to <br /> <span>T&C</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

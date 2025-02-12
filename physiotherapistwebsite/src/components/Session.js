// import React, { useState } from 'react'
// import './session.css'
// import { Link } from 'react-router-dom'
// // import Maps from './Maps'
// import DynamicMap from './Maps'
// import DateTimePicker from './datePicker';
// import datetimelogo from '../images/DateTime.png';


// export default function Session() {

//     const locationUrls = {
//         vizag: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15304.42585423799!2d83.2907481!3d17.6868151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d43a2717%3A0x94f13bdc14210b6f!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1731504458597!5m2!1sen!2sin",
//         sathupally: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15244.928262347195!2d80.8261099!3d17.207527849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36826584cf6427%3A0xdbc9d386f6fc9fb6!2sSathupally%2C%20Telangana%20507303!5e0!3m2!1sen!2sin!4v1731504458597!5m2!1sen!2sin",
//         hyderabad: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6277403318564!2d78.4746446!3d17.3850444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e914b4cf85%3A0x98e2d4f9727d54c2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1731504458597!5m2!1sen!2sin",
//         delhi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83936817866!2d77.0688985!3d28.5275198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d024e0e437301%3A0x40f6c4087c484c42!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1731504458597!5m2!1sen!2sin",
//         bengaluru: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659925907!2d77.46613009594488!3d12.954280230573657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1731646686519!5m2!1sen!2sin",
//         nellur: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31161.17001374096!2d77.96164286087912!3d12.506463614612391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac2b19770984ed%3A0xd7e279ac52257aa3!2sNellur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1731646860660!5m2!1sen!2sin"
//       };

//       const [mapUrl, setMapUrl] = useState(locationUrls.hyderabad); // Default map URL

//       const handleLocationChange = (event) => {
//         const locationName = event.target.value.toLowerCase();
//         if (locationUrls[locationName]) {
//           setMapUrl(locationUrls[locationName]);
//         }
//       };


//     return (
//         <div className='sessionOuter'>
//             <div className='sessionContainer'>
//                 <div className='sessionhead'>
//                     <h1>Book a session</h1>
//                 </div>
//                 <div className='containerbox'>
//                 <div className='container1'>
//                 <form className='sessionform'>
//                     <div className='sessioninputs'>
//                         <select onChange={handleLocationChange}>
//                         <option>Select location</option>
//                             <option>Vizag</option>
//                             <option>Hyderabad</option>
//                             <option>Delhi</option>
//                             <option>Bengaluru</option>
//                             <option>Nellur</option>
//                         </select>
//                         {/* <input type='text' placeholder='select your location' onChange={handleLocationChange} required/> */}
//                                 <div className='datePickerWrapper w-100'>
//                                     {/* <label className='labelhead'>Date&Time</label> */}
//                                     {/* <DateTimePicker className="fordatechange dateTimeInput forposition" /> */}
//                                     <img className='datetimelogo' src={datetimelogo}/>
//                                     <input type='datetime-local' value={15-11-2024} className="dateTime w-100"/>
//                                 </div>

//                       {/* fas fa-calendar-alt calendarIcon  */}
//                         <select required>
//                             <option>Select Category</option>
//                             <option>Lower Back Pain</option>
//                             <option>Neck and Upper Back Pain</option>
//                             <option>Knee Pain</option>
//                             <option> Shoulder Pain</option>
//                             <option> Wrist Pain</option>
//                             <option >Other Chronic Pain</option>
//                         </select>
//                     </div>
//                     <div className='sessionagree'>
//                         <input type='checkbox' checked />
//                         <p>I have read and agree to Great Indian Physiotherapy's Terms of Use and Privacy Policy
//                            <br/>I, hereby authorize Great Indian Physiotherapy to contact me. It will override my registry on the NCPR.</p>
//                     </div>
//                     <div className='sessionbtn'>
//                         <Link to="/book-appointment">
//                         <button>Book an Appointment</button>
//                         </Link>
//                     </div>
//                 </form>
//                 </div>
//             <div className='container2'>
//                 {/* <Maps/> */}
//                 <DynamicMap mapUrl={mapUrl}  />
//             </div>
//             </div>
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect, useRef } from 'react';
import './session.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import DynamicMap from './Maps';
import datetimelogo from '../images/DateTime.png';

export default function Session() {
    const navigate = useNavigate(); // For navigation after successful submission

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        date: '',
        service: '',
        doctors: '',
        category: '' 
    });

    const [mapUrl, setMapUrl] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');
    const dateTimeInputRef = useRef(null); // Reference to the input field
    const [error, setError] = useState(''); // Error state for validation or API errors

    const locationUrls = {
        vizag: "https://www.google.com/maps/embed?...",
        hyderabad: "https://www.google.com/maps/embed?...",
        delhi: "https://www.google.com/maps/embed?...",
        bengaluru: "https://www.google.com/maps/embed?...",
        nellore: "https://www.google.com/maps/embed?..."
    };

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
        setMapUrl(locationUrls.hyderabad); // Default location
    }, []);

    // Validation function
    const validateForm = () => {
        const { firstName, lastName, phoneNumber, date, service, doctors, category } = formData;

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
        return '';
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle location change for map
    const handleLocationChange = (event) => {
        const locationName = event.target.value.toLowerCase();
        if (locationUrls[locationName]) {
            setMapUrl(locationUrls[locationName]);
        }
    };

    const handleDateTimeChange = (event) => {
        setFormData({ ...formData, date: event.target.value });
    };

    // Form submission
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
            'https://physiotherapy-backend1.onrender.com/api/auth/bookAppointment',
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
        <div className='sessionOuter'>
            <div className='sessionContainer'>
                <div className='sessionhead'>
                    <h1>Book a session</h1>
                </div>
                <div className='containerbox'>
                    <div className='container1'>
                        <form className='sessionform' onSubmit={handleFormSubmit}>
                            <div className='sessioninputs'>
                                <select className='fontchange' onChange={handleLocationChange}>
                                    <option>Select location</option>
                                    <option>Vizag</option>
                                    <option>Hyderabad</option>
                                    <option>Delhi</option>
                                    <option>Bengaluru</option>
                                    <option>Nellore</option>
                                </select>
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder='Enter First Name'
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type='text'
                                    name='lastName'
                                    placeholder='Enter Last Name'
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    placeholder='Enter Phone Number'
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                                <select
                                    name='service'
                                    value={formData.service}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Select Service</option>
                                    <option value="Nursing at Home">Nursing at Home</option>
                                    <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                                    <option value="Transition Care / Rehabilitation">Transition Care / Rehabilitation</option>
                                </select>

                                <select
                                    name='doctors'
                                    value={formData.doctors}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Doctors</option>
                                    <option value="Dr.Suresh">Dr.Suresh</option>
                                    <option value="Dr.Ashok">Dr.Ashok</option>
                                    <option value="Dr.Harsha">Dr.Harsha</option>
                                </select>

                                <div
                                    className='datePickerWrapper'
                                    onClick={() => dateTimeInputRef.current?.showPicker()} // Open calendar
                                >
                                    <img className='datetimelogo' src={datetimelogo} alt="Calendar Logo" />
                                    <input
                                        type='datetime-local'
                                        value={formData.date}
                                        className="dateTime w-100"
                                        ref={dateTimeInputRef} // Attach the ref to the input
                                        onChange={handleDateTimeChange}
                                    />
                                </div>

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

                                <div className='sessionagree'>
                                    <input type='checkbox' checked readOnly />
                                    <p>I have read and agree to Great Indian Physiotherapy's Terms of Use and Privacy Policy. I hereby authorize Great Indian Physiotherapy to contact me. It will override my registry on the NCPR.</p>
                                </div>

                                {error && <div className="error-message">{error}</div>} {/* Show error */}

                                <div className='sessionbtn'>
                                    <button type="submit">Book an Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='container2'>
                        <DynamicMap mapUrl={mapUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
}

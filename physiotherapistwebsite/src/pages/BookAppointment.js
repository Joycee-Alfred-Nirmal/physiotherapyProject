import React from 'react';
import Navbar from '../components/Navbar';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';
import Session from '../components/Session';

export default function BookAppointment() {
  return (
    <div>
       <Navbar/>
       <Appointment/>
       <Footer/>
    </div>
  );
}

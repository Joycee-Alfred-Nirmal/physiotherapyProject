import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUpForm from './components/SignUpForm';
import ServicesPage from './pages/ServicesPage';
import Sidebar from './components/dashbord/Sidebar';
import App1 from './components/dashbord/App1';
import AdminDashboard from './components/dashbord/AdminDashboard';
import UsersTable from './components/dashbord/UsersTable';
import AppointmentsTable from './components/dashbord/AppointmentsTable';
import StatsCard from './components/dashbord/StatsCard';
import LoginPage from './components/dashbord/LoginPage';
import UnauthorizedPage from './components/dashbord/UnauthorizedPage';

// Mock function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem('token'); // Replace with your actual authentication logic
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/sign-in" />;
};

export default function Approuter() {
  return (
    <Router basename="/physiotherapistwebsite">
      <Routes>
        <Route path="/" element={<Navigate to="/sign-up" replace />} />
        <Route path="/home" element={<ProtectedRoute> <Home/></ProtectedRoute>} />
        <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
        <Route path="/sidebar" element={<ProtectedRoute><Sidebar /></ProtectedRoute>} />
        <Route path="/dashboard/*" element={<ProtectedRoute><App1 /></ProtectedRoute>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="users" element={<UsersTable />} />
          <Route path="appointments" element={<AppointmentsTable />} />
          <Route path="stats" element={<StatsCard />} />
          {/* You can also add an index route if you want a default view */}
          <Route index element={<StatsCard />} />
      </Routes>
    </Router>
  );
}

const express = require('express');
const router = express.Router();
const { authenticate, verifyAdmin } = require('../middleware/authenticate'); // Path to the middleware file
const { signup, login, bookAppointment, getAppointments , getUsers ,  getAllAppointments  } = require('../controllers/authController');
const Appointment = require("../models/Appointmnet"); // Ensure it's imported
const mongoose = require("mongoose");



router.post('/signup', signup);
router.post('/login', login);
router.post('/bookAppointment', authenticate, bookAppointment); // Protect route
//router.get('/getAppointments', authenticate, getAppointments); // Protect route
router.get('/getAppointments', authenticate, async (req, res) => {
try {
   const userId = new mongoose.Types.ObjectId(req.user.id); // Convert to ObjectId
   console.log("Decoded Token User ID:", userId ); // Debugging

    const appointments = await Appointment.find({ userId }); // Fetch user-specific appointments
    console.log("Appointments Fetched from DB:", appointments); // Debugging

    res.json(appointments.length ? appointments : []); // Always return an array
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ message: "Server error while fetching appointments" });
  }
});

//router.get('/user', getUsers);
// Admin route: fetch all appointments (for the admin dashboard)
router.get('/appointments', authenticate, verifyAdmin, getAllAppointments);


// Fetch all users (Admin only)
router.get('/users', authenticate, verifyAdmin, getUsers);



// Route to get all users (Admin Only)
router.get('/user',authenticate , verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();
        console.log( "admin verification error" , users);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users' , err });

    }
});





module.exports = router;

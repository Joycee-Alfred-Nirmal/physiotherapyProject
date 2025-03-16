const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path to your model
const jwt = require('jsonwebtoken'); // Required for generating a JWT token
const Appointment = require('../models/Appointmnet'); // Import the Appointment model

// Signup controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    console.log("user details 1" , user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
     // Log user before generating token
        console.log("User data before generating token:", user);

    // Generate a JWT token
    const token = jwt.sign(
    { id: user._id ,  name: user.name ,role: user.role}, '060dd81319804aa8ce0a9b98417aacbc9a6a3a22ef510f3a50042f625d297154b0ec168319cc73ed708e7159c410a86ba9d702ffc3136937c90e5883cd4a177c',
     { expiresIn: '3h' });

     console.log(" user details", user);

    // Send response with the token
    return res.status(200).json({
      message: 'Login successful',
      token, // Send the token to the client
       user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Book appointment controller
const bookAppointment = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized: No user found' });
    }

    const { firstName, lastName, phoneNumber, date, service, doctors, category } = req.body;

    const appointment = new Appointment({
      userId: new mongoose.Types.ObjectId(req.user.id), // Ensure ObjectId format
      firstName,
      lastName,
      phoneNumber,
      date,
      service,
      doctors,
      category,
    });

    await appointment.save();
    return res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to book appointment' });
  }
};


//get all users
const getUsers = async (req, res) => {
  try {
    // Optionally, you might add authorization logic to allow only admins
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error while fetching users' });
  }
};

// For admin: fetch all appointments
const getAllAppointments = async (req, res) => {
  try {
    // Optionally, you could check if req.user is admin here.
    const appointments = await Appointment.find(); // no filtering by userId
    return res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to fetch appointments' });
  }
};



// Get all appointments for a user
const getAppointments = async (req, res) => {
    try {
        console.log('Authenticated User:', req.user); // Debugging

        if (!req.user || !req.user.userId) {
            return res.status(401).json({ message: 'Unauthorized: No user found' });
        }

        const appointments = await Appointment.find({ userId: req.user.userId }); // Use `userId`
        console.log("Fetched Appointments:", appointments);
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { signup, login, bookAppointment, getAppointments , getUsers , getAllAppointments};

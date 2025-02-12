require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const authRouter = require('./routes/authRoutes');
const User = require('./models/User'); // Import the User model
const { authenticate , verifyAdmin } = require('./middleware/authenticate'); // Adjust path if needed


const app = express();
const PORT = process.env.PORT || 5000;

// Allowed Origins for CORS
const allowedOrigins = ['http://localhost:3000', 'https://azamshaik7.github.io'];

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ CORS blocked request from origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials like cookies/tokens
};

// Apply CORS Middleware
app.use(cors(corsOptions));

// Handle Preflight Requests
app.options('*', cors(corsOptions));

// Middleware to Parse JSON Request Bodies
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// User Signup Route
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password , role} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name,
    email,
    password: hashedPassword ,
    role: role || 'user' // Default to "user" if no role is provided
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('❌ Signup Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

//admin
app.get('/api/auth/me', authenticate , async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
    id: user._id,
    name: user.name,
     role: user.role,
     email: user.email });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Ensure role is included in the JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role }, // 🔥 Make sure role is included
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});




// Authentication Routes
app.use('/api/auth', authRouter);

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

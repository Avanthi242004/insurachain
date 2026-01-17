const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// load environment variables
dotenv.config();

// connect to MongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// auth routes
app.use('/api/auth', authRoutes);

module.exports = app;

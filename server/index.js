// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const appointmentsRoute = require('./routes/appointmentRoute');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// CORS
// app.use(cors({
//   origin: process.env.FRONTEND_URL ,
//   credentials: true,
// }));
app.use(cors());



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentsRoute);

// Server Listener
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

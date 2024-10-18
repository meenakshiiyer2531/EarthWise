const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB connection string
const mongoURI = 'mongodb+srv://meiyer:2002@cluster0.brr5l.mongodb.net/Earthwise?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// Define a schema and model for your profile
const profileSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // Ensure email is unique
  phone: String,
  address: String,
  school: String,
});

const Profile = mongoose.model('Profile', profileSchema);

// POST route to save the profile
app.post('/api/profile', async (req, res) => {
  const { name, email, phone, address, school } = req.body;

  const newProfile = new Profile({
    name,
    email,
    phone,
    address,
    school,
  });

  try {
    await newProfile.save();
    res.status(201).json({ message: 'Profile created successfully!' });
  } catch (error) {
    // Check for duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to create profile', details: error.message });
  }
});

// GET route to retrieve the profile by email
app.get('/api/profile/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const profile = await Profile.findOne({ email: email });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile); // Send the retrieved profile data
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: 'Failed to retrieve profile', details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

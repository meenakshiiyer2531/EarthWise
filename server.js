const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // For handling file uploads
const path = require('path');

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
  points: { type: Number, default: 0 }, // Points default to 0
});

const Profile = mongoose.model('Profile', profileSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination directory for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  }
});

const upload = multer({ storage });

// POST route for login (create or retrieve profile)
app.post('/api/login', async (req, res) => {
  const { email, name, phone, address, school } = req.body; // Expect these fields

  try {
    // Check if the profile exists
    let profile = await Profile.findOne({ email });

    if (!profile) {
      // Create a new profile with points initialized to 0
      profile = new Profile({
        name,
        email,
        phone,
        address,
        school,
        points: 0,
      });
      await profile.save();
      return res.status(201).json({ message: 'Profile created successfully!', profile });
    } else {
      // Return existing profile
      return res.status(200).json({ message: 'Login successful', profile });
    }
  } catch (error) {
    console.error('Error in login route:', error);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

// GET route to retrieve the profile by email
app.get('/api/profile/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const profile = await Profile.findOne({ email });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile); // Send the retrieved profile data
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: 'Failed to retrieve profile', details: error.message });
  }
});

// POST route to upload a file
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { originalname, path: filePath } = req.file;

  // Here you can save the file info to your database if needed
  try {
    // Example: Save file info in a separate collection if desired
    // You can create a separate schema for storing files if necessary
    res.status(201).json({
      message: 'File uploaded successfully!',
      file: {
        originalName: originalname,
        path: filePath,
      },
    });
  } catch (error) {
    console.error('Error saving file info:', error);
    res.status(500).json({ message: 'File upload failed', details: error.message });
  }
});

// Update points route
app.post('/api/update-points', async (req, res) => {
  const { email, points } = req.body;

  try {
    // Update points in the database
    const updatedProfile = await Profile.findOneAndUpdate(
      { email },
      { points },
      { new: true } // Return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ message: 'Points updated successfully.', profile: updatedProfile });
  } catch (error) {
    console.error('Error updating points:', error);
    res.status(500).json({ message: 'Failed to update points.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

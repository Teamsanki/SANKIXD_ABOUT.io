const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection string (replace with your MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/musicBot';  // For local MongoDB on VPS
// Or use MongoDB Atlas (replace with your Atlas URI)
// const mongoURI = 'mongodb+srv://Teamsanki:Teamsanki@cluster0.jxme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define a User model
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    username: String,
    createdAt: { type: Date, default: Date.now }
}));

// API endpoint to receive data from the front-end and save to MongoDB
app.post('/api/saveData', async (req, res) => {
    const { name, username } = req.body;

    if (!name || !username) {
        return res.status(400).send('Name and username are required');
    }

    // Save the user data to MongoDB
    const newUser = new User({ name, username });
    
    try {
        await newUser.save();
        console.log('User data saved to MongoDB');
        res.status(200).send('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Failed to save data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

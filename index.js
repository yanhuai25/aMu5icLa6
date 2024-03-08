const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to MusicLab! Learn to play an instrument with our online courses and resources.');
});

app.get('/courses', (req, res) => {
  res.send('Explore our wide range of music courses, designed to be accessible to anyone, regardless of experience level.');
});

app.get('/register', (req, res) => {
  res.send('Ready to start your musical journey? Register for our courses today!');
});

// Start the server
app.listen(3000, () => {
  console.log('MusicLab server is running on port 3000.');
});
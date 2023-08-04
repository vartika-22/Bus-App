const express = require('express');
const User = require('../Models/User');

const router = express.Router();

router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

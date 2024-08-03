const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/jwt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ username, password: bcrypt.hashSync(password, 10) });
    await user.save();
    res.status(201).json({ token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.json({ token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

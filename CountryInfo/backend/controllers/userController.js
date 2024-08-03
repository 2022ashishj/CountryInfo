const Favorite = require('../models/Favorite');
const SearchHistory = require('../models/SearchHistory');

exports.addFavorite = async (req, res) => {
  const { country } = req.body;
  const userId = req.user.id;
  try {
    const favorite = new Favorite({ user: userId, country });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getFavorites = async (req, res) => {
  const userId = req.user.id;
  try {
    const favorites = await Favorite.find({ user: userId });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addSearchHistory = async (req, res) => {
  const { search } = req.body;
  const userId = req.user.id;
  try {
    let history = await SearchHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(5);
    if (history.length === 5) {
      await SearchHistory.findByIdAndDelete(history[4]._id);
    }
    const newHistory = new SearchHistory({ user: userId, search });
    await newHistory.save();
    res.status(201).json(newHistory);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getSearchHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    const history = await SearchHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(5);
    res.json(history);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const express = require('express');
const router = express.Router();
const {
  addFavorite,
  getFavorites,
  addSearchHistory,
  getSearchHistory,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/favorites', authMiddleware, addFavorite);
router.get('/favorites', authMiddleware, getFavorites);
router.post('/search-history', authMiddleware, addSearchHistory);
router.get('/search-history', authMiddleware, getSearchHistory);

module.exports = router;

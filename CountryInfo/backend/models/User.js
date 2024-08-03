const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }],
  searchHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SearchHistory' }],
});
module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');
const SearchHistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  search: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('SearchHistory', SearchHistorySchema);

const axios = require('axios');

exports.getCountryByCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/currency/{CURRENCY_CODE}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

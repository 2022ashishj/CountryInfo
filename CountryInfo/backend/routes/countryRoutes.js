const express = require('express');
const router = express.Router();
const { getCountryByCurrency } = require('../controllers/countryController');

router.get('/:currency', getCountryByCurrency);

module.exports = router;

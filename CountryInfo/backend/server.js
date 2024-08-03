const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const countryRoutes = require('./routes/countryRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/user', userRoutes);

app.get('/',(req,res)=>{
    res.send("This is home route");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

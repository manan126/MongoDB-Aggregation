require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 

connectDB(); 
const app = express();
const airbnbRoutes = require('./routes/airbnbRoutes');

app.use(express.json());
app.use('/api/properties', airbnbRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
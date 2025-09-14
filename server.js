const express = require('express');
const cors = require('cors');
const path=require('path');

const app = express();
const PORT =5000;
app.use(cors());
app.use(express.json());

const authRoutes = require('./Routes/authRoutes');
const connectDB = require('./db');
connectDB();

app.use('/api/auth/', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

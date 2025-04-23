// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Import routes
const productRoutes = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');


app.use('/api/products', productRoutes);
app.use('/api/users', userRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 3030, () =>
      console.log(`Server running on port ${process.env.PORT || 3030}`)
    );
  })
  .catch((err) => console.error('MongoDB error:', err));

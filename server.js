const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const MESSAGE = 'Server started on port'
const PORT = process.env.PORT || 5000;

// read .env
dotenv.config();

// testpoint
app.get('/api', (req, res) => {
  res.send(`${MESSAGE} ${PORT}`);
});

// connect to mongoDB
mongoose.connect(process.env.MDB_CONNECT, (err) => {
  if (err) return console.error(err);
  console.log('Connected to MongoDB');
});

// set up routes
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:3000", "https://smartgrowbox.netlify.app", "https://nagradna-igra-server.netlify.app"],
  credentials: true,
}));

app.use('/api/auth', require('./routers/userRouter'));
app.use('/api/light', require('./routers/lightRouter'));
app.use('/api/ventilation', require('./routers/ventilationRouter'));
app.use('/api/temperature_humidity', require('./routers/temperatureHumidityRouter'));
app.use('/api/soil_humidity', require('./routers/soilHumidityRouter'));
app.use('/api/device', require('./routers/deviceRouter'));

// setup server
app.listen(PORT, () => {
  console.log(`${MESSAGE} ${PORT}`);
});

const router = require('express').Router();
const TemperatureHumidity = require('../models/temperatureHumidityModel');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  try{
    const { user_id, temperature, humidity, time} = req.body;

    const newTemperatureHumidity = new TemperatureHumidity({
      user_id,
      temperature,
      humidity,
      time
    });

    const savedTemperatureHumidity = await newTemperatureHumidity.save();

    res.json(savedTemperatureHumidity);
    console.log('Temperature Humidity added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.post('/dodaj', async (req, res) => {
  try{
    const { user_id, temperature, humidity, time} = req.body;

    const newTemperatureHumidity = new TemperatureHumidity({
      user_id,
      temperature,
      humidity,
      time
    });

    const savedTemperatureHumidity = await newTemperatureHumidity.save();

    res.json(savedTemperatureHumidity);
    console.log('Temperature Humidity added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/list', auth, async (req, res) => {
  try{
    const temperatureHumiditys = await TemperatureHumidity.find();
    console.log('Temperature Humidity loaded succesfully');
    res.json(temperatureHumiditys);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/temperatura_vlaga', async (req, res) => {
  try{
    const temperatureHumiditys = await TemperatureHumidity.find();
    console.log('Temperature Humidity loaded succesfully');
    res.json(temperatureHumiditys);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
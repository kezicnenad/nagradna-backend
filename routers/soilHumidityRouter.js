const router = require('express').Router();
const SoilHumidity = require('../models/soilHumidityModel');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  try{
    const { user_id, sonde_1, sonde_2, sonde_3, sonde_4, sonde_5, time} = req.body;

    const newSoilHumidity = new SoilHumidity({
      user_id,
      sonde_1,
      sonde_2,
      sonde_3,
      sonde_4,
      sonde_5,
      time
    });

    const savedSoilHumidity = await newSoilHumidity.save();

    res.json(savedSoilHumidity);
    console.log('Soil Humidity added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.post('/dodaj', async (req, res) => {
  try{
    const { user_id, sonde_1, sonde_2, sonde_3, sonde_4, sonde_5, time} = req.body;

    const newSoilHumidity = new SoilHumidity({
      user_id,
      sonde_1,
      sonde_2,
      sonde_3,
      sonde_4,
      sonde_5,
      time
    });

    const savedSoilHumidity = await newSoilHumidity.save();

    res.json(savedSoilHumidity);
    console.log('Soil Humidity added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/vlaga_tla', async (req, res) => {
  try{
    const soilHumiditys = await SoilHumidity.find();
    console.log('Soil Humidity loaded succesfully');
    res.json(soilHumiditys);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/list', auth, async (req, res) => {
  try{
    const soilHumiditys = await SoilHumidity.find();
    console.log('Temperature Humidity loaded succesfully');
    res.json(soilHumiditys);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
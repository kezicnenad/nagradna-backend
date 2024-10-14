const router = require('express').Router();
const Device = require('../models/deviceModel');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  try{
    const { user_id, mac_address, device_name, ssid, password, is_online, time} = req.body;

    const newDevice = new Device({
      user_id,
      mac_address,
      device_name,
      ssid,
      password,
      is_online,
      time
    });

    const savedDevice = await newDevice.save();

    res.json(savedDevice);
    console.log('Device added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.post('/dodaj', async (req, res) => {
  try{
    const { user_id, mac_address, device_name, ssid, password, is_online, time} = req.body;

    const newDevice = new Device({
      user_id,
      mac_address,
      device_name,
      ssid,
      password,
      is_online,
      time
    });

    const savedDevice = await newDevice.save();

    res.json(savedDevice);
    console.log('Device added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/list', auth, async (req, res) => {
  try{
    const devices = await Device.find();
    console.log('Device loaded succesfully');
    res.json(devices);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/uredjaj', async (req, res) => {
  try{
    const devices = await Device.find();
    console.log('Device loaded succesfully');
    res.json(devices);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
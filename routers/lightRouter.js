const router = require('express').Router();
const Light = require('../models/lightModel');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  try{
    const { user_id, start, end, time} = req.body;

    const newLight = new Light({
      user_id,
      start,
      end,
      time
    });

    const savedLight = await newLight.save();

    res.json(savedLight);
    console.log('Light added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/list', auth, async (req, res) => {
  try{
    const lights = await Light.find();
    console.log('Lights loaded succesfully');
    res.json(lights);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/rasvjeta', async (req, res) => {
  try{
    const lights = await Light.find();
    console.log('Lights loaded succesfully');
    res.json(lights.reverse());
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
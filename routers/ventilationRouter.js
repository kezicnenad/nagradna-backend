const router = require('express').Router();
const Ventilation = require('../models/ventilationModel');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  try{
    const { user_id, exhaust, air, time} = req.body;

    const newVentilation = new Ventilation({
      user_id,
      exhaust,
      air,
      time
    });

    const savedVentilation = await newVentilation.save();

    res.json(savedVentilation);
    console.log('Ventilation added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.post('/dodaj', async (req, res) => {
  try{
    const { user_id, exhaust, air, time} = req.body;

    const newVentilation = new Ventilation({
      user_id,
      exhaust,
      air,
      time
    });

    const savedVentilation = await newVentilation.save();

    res.json(savedVentilation);
    console.log('Ventilation added');

  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/list', auth, async (req, res) => {
  try{
    const ventilations = await Ventilation.find();
    console.log('Ventilation loaded succesfully');
    res.json(ventilations);
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

router.get('/ventilacija', async (req, res) => {
  try{
    const ventilations = await Ventilation.find();
    console.log('Ventilation loaded succesfully');
    res.json(ventilations.reverse());
  } catch(err){
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
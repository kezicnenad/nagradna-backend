const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
router.post('/registration', async (req, res) => {
  try{
    const {email, password, passwordVerify} = req.body;

    // validation
    if (!email || !password || !passwordVerify){
      console.log('Please enter all required fields');
      return res
      .status(400)
      .json({errorMessage: 'Please enter all required fields'});
    }

    if (password.length < 5){
      console.log('Please enter a password of at least 5 characters');
      return res
      .status(400)
      .json({errorMessage: 'Please enter a password of at least 5 characters'});
    }

    if (password !== passwordVerify){
      console.log('Please enter the same password twice');
      return res
      .status(400)
      .json({errorMessage: 'Please enter the same password twice'});
    }

    const existingUser = await User.findOne({email: email});

    if (existingUser){
      console.log('An account with this email already exist');
      return res
      .status(400)
      .json({errorMessage: 'An account with this email already exist'});
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log('PASSWORD HASH:', passwordHash);

    // save a new user account to the debugger
    const newUser = new User({
      email, passwordHash
    });

    const savedUser = await newUser.save();

    // sign the token
    const token = jwt.sign({
      user: savedUser._id
    }, process.env.JWT_SECRET);
    console.log('TOKEN:', token);

    //send the token in a HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    })
    .send();

  }
  catch(err){
    console.log(err);
    res.status(500);
  }
});

// login
router.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body;

    // validation
    if (!email || !password){
      console.log('Please enter all required fields');
      return res
      .status(400)
      .json({errorMessage: 'Please enter all required fields'});
    }
    
    const existingUser = await User.findOne({email});
    if (!existingUser){
      console.log('Wrong email or password');
      return res
      .status(401)
      .json({errorMessage: 'Please enter all required fields'});
    }

    const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
    if (!passwordCorrect){
      console.log('Wrong email or password');
      return res
      .status(401)
      .json({errorMessage: 'Please enter all required fields'});
    }

    const token = jwt.sign({
      user: existingUser._id,
    }, process.env.JWT_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    }).send();
    console.log('Logged succesfully');

  } catch (err){
    console.log(err);
    res.status(500);
  }
})

// logout user
router.get('/logout', (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0)
  })
  .send();
  console.log("User logged out");
});

router.get('/loggedIn', (req, res) => {
  try{
    const token = req.cookies.token;

    if (!token){
      console.log('Unauthorized');
      return res.json(false);
    }
    
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);

  } catch (err){
    console.error(err);
    res.json(false);
  }
});

module.exports = router;
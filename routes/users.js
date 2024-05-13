require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register",  async (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: true,
      message: "Request body incomplete - email and password needed"
    });
  }
  const existingUser = await req.db('user').where('username', username).first();

  if (existingUser) {
    return res.status(409).json({ 
      error: true,
      message: 'User already exists' });
  }

  const hash = bcrypt.hashSync(password, saltRounds)

  try {
    await req.db('user').insert({ username, hash });
    res.status(201).json({ success: true, message: "User created" });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ 
      error: true,
      message: 'Error creating user' });
  }

});

router.post("/login",  async (req, res) => {
  
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: true,
        message: "Request body incomplete - email and password needed"
      });
    }
    const existingUser = await req.db('user').where('username', username).first();

    if (!existingUser) {
      return res.status(401).json({ 
        error: true,
        message:  'User does not exist' 
      });
    }

    const match = await bcrypt.compare(password, existingUser.Hash);

    if (!match) {
      return res.status(401).json({ 
        error: true,
        message:  'Password is incorrect' });
    }

    const secretkey = process.env.JWT_SECRET
    const expires_in = 60 * 10 // 10 minutes
    const exp = Date.now() + expires_in * 1000
    const tokenPayload = { userId: existingUser.ID, username };
    const token = jwt.sign({ tokenPayload, exp }, secretkey)
    res.json({ token_type: "Bearer", token, expires_in })

});

module.exports = router;

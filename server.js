const PORT = 5002;
const exp = require('express');
const axios = require('axios');
const cors = require('cors');
const { v4: uidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const ASTRA_URL = ''; // todo; add url here
const ASTRA_TOKEN = ''; // todo: add token here
const myApp = exp();
myApp.use(exp.json());
myApp.use(cors());

myApp.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  //console.log(`${username} ${password}`);
  const userid = uidv4();
  const hashedpassword = await bcrypt.hash(password, 10);

  const options = {
    method: 'POST',
    headers: {
      Accepts: 'applications/json',
      'X-Cassandra-Token': ASTRA_TOKEN,
      'Content-Type': 'applications.json',
    },
    data: { userid, username, hashedpassword },
  };

  try {
    const response = await axios(ASTRA_URL, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

myApp.listen(PORT, () => console.log('My app on port 5002'));

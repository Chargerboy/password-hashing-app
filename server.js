const PORT = 5002;
const exp = require('express');
const axios = require('axios');
const cors = require('cors');

const myApp = exp();
myApp.use(cors());

myApp.post('/signup', (req, res) => {
  console.log(req.body);
});

myApp.listen(PORT, () => console.log('My app on port 5002'));

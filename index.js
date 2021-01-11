const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server Started on port ' + port);
});

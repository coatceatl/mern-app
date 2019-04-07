const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi from server');
});

app.listen(4000);

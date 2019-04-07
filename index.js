const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
require('./services/passport.js');

const app = express();

authRoutes(app);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
  console.log('server started');
});

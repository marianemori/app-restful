const express = require("express");
const app = express();

app.use(express.json());
// app.use('/', require('./src/routes/userRoutes'));

app.listen(3000, function() {
  console.log('Server running!');
});
const express = require("express");
const app = express();

app.use(express.json());
 app.use('/', require('./src/routes/userRoutes'));

app.listen(3000, function() {
  console.log('Server running!');
});

  
(async function () {
  const sequelize = require('./src/database/database')
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}());
 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');

const port = process.env.port || 8080;

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  db.sequelize.sync({ force: false });
  console.log('Server listening on :', port);
});
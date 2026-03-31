const express = require('express');
const app = express();
const managerRoutes = require('./routes/managerRoutes');
const internRoutes = require('./routes/internRoutes');
const developerRoutes = require('./routes/developerRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/mapi', managerRoutes);
app.use('/iapi', internRoutes);
app.use('/dapi', developerRoutes);

module.exports = app;
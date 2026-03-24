const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Student API is running');
});
app.use('/api', studentRoutes);

module.exports = app;
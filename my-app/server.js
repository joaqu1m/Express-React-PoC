const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3001, () => {
  console.log(`Server listening on port 3001`);
});
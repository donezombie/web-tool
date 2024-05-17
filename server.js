const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3300;

const buildPath = path.join(__dirname, 'client/build');

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());


app.post('/api/base64/decode', (req, res) => {
  const result = Buffer.from(req.body.input, 'base64').toString();
  res.json(result);
})

app.post('/api/base64/encode', (req, res) => {
  const result = Buffer.from(req.body.input).toString('base64')
  res.json(result);
})

// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Showing that the server is online and running and listening for changes
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
});

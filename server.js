const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001; // Choose any available port number

// Endpoint to serve JSON data
app.get('/api/data', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

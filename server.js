const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


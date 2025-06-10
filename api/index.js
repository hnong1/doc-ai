const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send({ message: 'API backend running!' });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
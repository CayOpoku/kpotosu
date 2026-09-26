const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/ausbabo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
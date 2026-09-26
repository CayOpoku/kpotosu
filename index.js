const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/ausbabo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);

const details = [{
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer"
},
{
  name: "Jane Smith",
  age: 25,
  occupation: "Graphic Designer"
},
{
  name: "Kpotosu Johnson",
  age: 28,
  occupation: "Data Scientist"
}];

app.get("/details", (req, res) => {{
   res.json(details); 
}});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
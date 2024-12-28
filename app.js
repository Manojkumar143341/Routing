const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('my page ');
});
app.get('/about', (req, res) => {
  res.send('about page');
});
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

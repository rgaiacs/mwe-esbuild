const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'demo/index.html'));
});
app.get('/binder.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'demo/binder.js'));
});
app.get('/binder.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'demo/binder.css'));
});

app.use(express.static(path.join(__dirname, 'packages/binder/dist')))

app.listen(port);
console.log('Server started at http://localhost:' + port);

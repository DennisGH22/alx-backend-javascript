const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use((req, res) => {
  res.send('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ' + req.url + '</pre>\n</body>\n</html>');
});

const server = app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = server;

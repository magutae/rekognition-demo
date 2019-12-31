const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const cors = require('cors');

// const port = process.env.PORT || 3000;
// const publicPath = '/';

const options = {
  key: fs.readFileSync('./keys/private.pem'),
  cert: fs.readFileSync('./keys/public.pem')
}

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/'), { index: 'index.html' }));
// app.listen(port, function () {
//   console.log(`App listening on: http://localhost:${port}`);
// });

http.createServer(app).listen(80);

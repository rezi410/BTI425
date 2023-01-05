
// heroku link: https://a4-reziyemu.herokuapp.com/home

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/bti425-a3-reziyemu-sulaiman'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/bti425-a3-reziyemu-sulaiman/index.html'));});
app.listen(process.env.PORT || 8080);

